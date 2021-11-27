@brief 		Greek Troll
@details	Fancy like that
@auth 		Justin Reina
@date 		11/6/21

@todo	 reorganize dir

@section 	Description
	18" Glow-in-the-dark troll w/:
	- Glowing pink eyes
	- Screaming voice
	- Bluetooth interface
	- WiFi interface
	- Wall rechargeable
	- BT-Controlling app (toggle eyes, warming lamp, control/update audio)
	- On button
	- Presence detection
	- Routine planning (warming light or features)
	- Low-battery wifi notifications by email & app


@section 	Model
	Troll Head
	Base Stand
	Bottom lid\electronics stand
	
@section 	Components	
	Arduino Feather		BL
	LiPo battery		INTERNAL
	LiPo recharger		BL
	Speaker				EXT (this rev)
	Audio amplifier		BL
	Presence detection	EXT (this rev)
	Toggle button		EXT (this rev)
	Battery monitor		BL
	Glowing LED			INTERNAL
	
	@summ 	All Electronics screwed to bottom lid.
	@soln 	stand full of space, route for cable up to head & slot for batts now

@section 	Config
	Sliced @ 35/77.5
	Scaled @ 2.875

@section 	Plan
	Clear printed lenses, with pink LED buried at base
	Black printed base, with Feather & batteries embedded
	White, 18ga wire for LEDs
	
		100mA max ea, 20mA nom; 15mA tgt
		Wire @ 200mA? 28 ga (use your grey wires? do you have white?
		
	Print top first
	Wires routed through printed inner tube in part