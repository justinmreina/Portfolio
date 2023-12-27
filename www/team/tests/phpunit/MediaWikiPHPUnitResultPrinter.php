<?php

use PHPUnit\Framework\TestFailure;
use PHPUnit\TextUI\DefaultResultPrinter;

class MediaWikiPHPUnitResultPrinter extends DefaultResultPrinter {
	/** @inheritDoc */
	protected function printDefectTrace( TestFailure $defect ): void {
		parent::printDefectTrace( $defect );
		$test = $defect->getTestName();
		$log = MediaWikiLoggerPHPUnitExtension::$testsCollection[$test] ?? null;
		if ( $log ) {
			$this->write( "=== Logs generated by test case\n{$log}\n===\n" );
		}
	}
}
