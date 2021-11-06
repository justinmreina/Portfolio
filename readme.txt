@brief 		justinreina.com development notes
@details 	revision controlled scratchpad
@auth 		Justin Reina
@date 		11/6/2021

@section 	Slide Animation
    1. logo goes from center to right
    2. slide title is displayed-on when logo is past ABC
    3. slide title is removed-off  when logo is less than XYZ
    4. title fades in with a grey-white fade
    
    A. Clear segmentation & display in code
    B. Well segmented & understandable by external audience

@section  States (Sn)
    1. Center
    2. Movement-Right
    3. Right
    4. Movement-Center

  const slide_state = {
    CENTER: 1,
    MOVE_RIGHT: 2,
    RIGHT: 3,
    MOVE_LEFT: 4,
  }

@section  Actions (An)
    1. Boot
    2. Refresh
    3. Click Center
    4. Click Right
    5. Click Motion
    
  const slide_action = {
    BOOT: 1,
    REFRESH: 2,
    MENU_CLICK: 3,
  }

@section  Behavior
    //CENTER
    BOOT
    - Take init value
    REFRESH
    - Maintain value
    MENU_CLICK
    - Home? No response
    - !Home? Move right
    
    //MOVE_RIGHT
    BOOT
    - N/A
    REFRESH
    - Maintain value
    MENU_CLICK
    - no response
  
    //RIGHT
    BOOT
    - N/A
    REFRESH
    - Maintain value
    MENU_CLICK
    - !Home? Move left
    - no response

    //MOVE_LEFT
    BOOT
    - N/A
    REFRESH
    - Maintain value
    MENU_CLICK
    - no response

@section    Implementation Method
    Place enums (in globals file section)
    Add any other desired enums
    Printf like a mofo, through the whole cycle
      
      "Sn: An response - doing xyz"

