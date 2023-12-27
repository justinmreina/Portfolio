#!/bin/bash
#
# Resource limiting wrapper for command execution

# Clean up cgroup
cleanup() {
	# First we have to move the current task into a "garbage" group, otherwise
	# the cgroup will not be empty, and attempting to remove it will fail with
	# "Device or resource busy"
	if [ -w "$SB_CGROUP"/tasks ]; then
		GARBAGE="$SB_CGROUP"
	else
		GARBAGE="$SB_CGROUP"/garbage-`id -un`
		if [ ! -e "$GARBAGE" ]; then
			mkdir -m 0700 "$GARBAGE"
		fi
	fi
	echo $BASHPID > "$GARBAGE"/tasks

	# Suppress errors in case the cgroup has disappeared due to a release script
	rmdir "$SB_CGROUP"/$$ 2>/dev/null
}

updateTaskCount() {
	# There are lots of ways to count lines in a file in shell script, but this
	# is one of the few that doesn't create another process, which would
	# increase the returned number of tasks.
	readarray < "$SB_CGROUP"/$$/tasks
	NUM_TASKS=${#MAPFILE[*]}
}

log() {
	echo limit.sh: "$*" >&3
	echo limit.sh: "$*" >&2
}

SB_INCLUDE_STDERR=
SB_USE_LOG_PIPE=
SB_CPU_LIMIT=0
SB_CGROUP=
SB_MEM_LIMIT=0
SB_FILE_SIZE_LIMIT=0
SB_WALL_CLOCK_LIMIT=0

# Override settings
eval "$2"

if [ -n "$SB_INCLUDE_STDERR" ]; then
	exec 2>&1
fi
if [ -z "$SB_USE_LOG_PIPE" ]; then
	# Open a dummy log FD
	exec 3>/dev/null
fi

if [ "$SB_CPU_LIMIT" -gt 0 ]; then
	ulimit -t "$SB_CPU_LIMIT"
fi
if [ "$SB_MEM_LIMIT" -gt 0 ]; then
	if [ -n "$SB_CGROUP" ]; then
		# Create cgroup
		if ! mkdir -m 0700 "$SB_CGROUP"/$$; then
			log "failed to create the cgroup."
			SB_CGROUP=""
		fi
	fi
	if [ -n "$SB_CGROUP" ]; then
		echo $$ > "$SB_CGROUP"/$$/tasks
		if [ -n "$SB_CGROUP_NOTIFY" ]; then
			echo "1" > "$SB_CGROUP"/$$/notify_on_release
		fi
		# Memory
		echo $SB_MEM_LIMIT > "$SB_CGROUP"/$$/memory.limit_in_bytes
		# Memory+swap
		# This will be missing if there is no swap
		if [ -e "$SB_CGROUP"/$$/memory.memsw.limit_in_bytes ]; then
			echo $SB_MEM_LIMIT > "$SB_CGROUP"/$$/memory.memsw.limit_in_bytes
		fi
	fi
else
	SB_CGROUP=""
fi
if [ "$SB_FILE_SIZE_LIMIT" -gt 0 ]; then
	ulimit -f "$SB_FILE_SIZE_LIMIT"
fi
if [ "$SB_WALL_CLOCK_LIMIT" -gt 0 -a -x "/usr/bin/timeout" ]; then
	/usr/bin/timeout $SB_WALL_CLOCK_LIMIT /bin/bash -c "$1" 3>&-
	STATUS="$?"
	if [ "$STATUS" == 124 ]; then
		log "timed out executing command \"$1\""
	fi
else
	eval "$1" 3>&-
	STATUS="$?"
fi

if [ -n "$SB_CGROUP" ]; then
	updateTaskCount

	if [ $NUM_TASKS -gt 1 ]; then
		# Spawn a monitor process which will continue to poll for completion
		# of all processes in the cgroup after termination of the parent shell
		(
			while [ $NUM_TASKS -gt 1 ]; do
				sleep 10
				updateTaskCount
			done
			cleanup
		) >&/dev/null < /dev/null 3>&- &
		disown -a
	else
		cleanup
	fi
fi
exit "$STATUS"

