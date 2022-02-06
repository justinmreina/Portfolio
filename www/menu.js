/************************************************************************************************************************************/ 
/** @file		  menu.js
 * 	@brief		menu response activities
 * 	@details	x
 *
 * 	@section 	Behavior
 * 			init   - menu_init()
 * 			open   - menuSel()
 * 			action - clickResp() ... @open others?
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/** @fcn        menu_init()
 *  @brief      initialize the menu for use
 *  @details	  x
 *
 *  @section    Opens
 *      eww make less verbose
 */ 																													                                                               
/************************************************************************************************************************************/
function menu_init() {
  
	//Locals
	var isMobile;																															/* check if run on mobile																*/
	var glowEffect = false;																										/* false:turning off, true: turning on 	      					*/
	
  const menuIcon     = document.getElementById("menuIcon");
  const menuIconCell = document.getElementById("menuIconCell");

	//Check
	isMobile = getDeviceType();

  /**********************************************************************************************************************************/
  /*																		             Menu Icon Size & Bar Height				 														                */
  /**********************************************************************************************************************************/
  menuIcon.style.height = (isMobile) ? "64px":"34px";	
  menuIcon.style.width  = (isMobile) ? "64px":"34px";

  menuIconCell.style.height = (isMobile) ? "74px":"34px";
  menuIconCell.style.width  =(isMobile)  ? "74px":"34px";

  /**********************************************************************************************************************************/
  /*																		                     Menu Text Sizes				 														                    */
  /**********************************************************************************************************************************/
  //Menu Font Size
  for(var i=0; i<NUM_MENU_SEL; i++) {
      var span = document.getElementById("menu_sel_" + i);
      span.style.fontSize = (isMobile) ? "60px":"30px";
  }

  //Menu Width
  var menuBar = document.getElementById("mySidenav");
  menuBar.style.width = "0px";                                          		/* closed                                               */

  //Boot Color
  updateMenuColor(0);

}


/************************************************************************************************************************************/
/** @fcn        updateMenuColor(sel_index)
 *  @brief      x
 *  @details	  x
 *
 *  @param [in] sel_index - index for selectino (e.g. "0" for "Home")
 */
/************************************************************************************************************************************/
function updateMenuColor(sel_index) {

  //Locals
  var span;


  //Set all to standard color
  for(var i=0; i<NUM_MENU_SEL; i++) {
    span = document.getElementById("menu_sel_" + i);
    span.style.color = "#818181";
  }

  //Contact Page Sel?
  if(sel_index == "oops") {
    return;
  }

  //Set selection to active color
  span = document.getElementById("menu_sel_" + sel_index);									/* boot sel: Home																				*/
  span.style.color = "#F1F1F1";
}

/************************************************************************************************************************************/
/** @fcn        menuSel()
 *  @brief      open or close the menu sidebar
 *  @details	  x
 */ 																													                                                               
/************************************************************************************************************************************/
function menuSel() {
  
  //Locals
  var width;                                                                /* current width of page menu bar                       */

  //Grab
  width = document.getElementById("mySidenav").style.width; 

  //Update
  halt_menuGlow();
  
  if(width > "0px") {
    closeNav();
  } else {
    openNav();
  }
}

/************************************************************************************************************************************/
/** @fcn		    openNav()
 *  @brief			open the side navigation menu
 *  @details	  x
 */ 																													                                                               
/************************************************************************************************************************************/
function openNav() {

	//Update
	document.getElementById("mySidenav").style.width = getSideNavWidth();

	//Idle Timeout
	const myTimeout = setTimeout(closeNav, 2300);							/* automatically close after specified interval			*/
}


/************************************************************************************************************************************/
/** @fcn		    closeNav()
 *  @brief			close the side navigation menu
 *  @details	  x
 */ 																													                                                               
/************************************************************************************************************************************/
function closeNav() {

	//Update
	document.getElementById("mySidenav").style.width = "0";
}


/************************************************************************************************************************************/
/** @fcn		    clickResp(msg)
 *  @brief			Switch page & update header bar
 *  @details	  this may be called anywhere to reload to specified subpage
 * 			
 *  @param		[in] (string) msg - Message to display on header bar
 */ 																													                                                               
/************************************************************************************************************************************/
function clickResp(msg) {

  //Locals
  var filename;                                                             /* filename for prospect load                           */
  var pageHeight;                                                           /* disp height for prospect load                        */
  var pageInd;

  //Get page info
  filename   = getPageFileName(msg);
  pageHeight = getPageHeight(msg);
  pageInd    = getPageInd(msg);

  //Update Color
  updateMenuColor(pageInd);
  delay_ms(25);

  //close & pause
  closeNav();
  delay_ms(125);

  //Load page
  document.getElementById('centerpage').src = filename;
  fitMain(pageHeight);
  currentPage = msg;

  //Update Header Bar
  updateHeader(msg);

  //Scroll & Reset
  scrollToTop();
}

/************************************************************************************************************************************/
/** @fcn		  set_menuGlow()
 *  @brief	  set menu glow function for launch
 *  @details	  when Home page gets loaded or on boot                       				
 *
 *  @section		Procedure 		
 *	  set a delayed task to launch this
 *	  set delayed task for first load (after X seconds, a glow routine launches, then disappears)
 *
 *  @section 	    Opens
 *	    void this task's action if any other page gets loaded first 
 *	    
 */ 																													                                                               
/************************************************************************************************************************************/
function set_menuGlow() {

  //Locals
  var menu_glow;																														/* menu glow image																			*/

	//Enable
	glowEffect = true;

  //Grab
  menu_glow = document.getElementById('menuGlow');
	  
  //Prepare to show
  menu_glow.style.opacity = 0;																							/* in front but transulescent														*/
  menu_glow.style.zIndex  = 1;
	
  //Launch glow effect	  	
  setTimeout(run_menuGlow, 25, true);	
}


/************************************************************************************************************************************/
/** @fcn		run_menuGlow(dir)
 *  @brief	    cycle the glowing effect
 *  @details	uses 'glowEffect' state                       				
 *
 *  @param  [in] dir - true: increase visibility, false: decrease
 *  
 *  @section 		Opens	
 * 			have fade out delay a little slower (3.5?)
 */ 																													                                                               
/************************************************************************************************************************************/
function run_menuGlow(dir) {

  //Locals
  var menu_glow;																													/* menu glow image																			*/
  var currOpacity;																												/* current opacity of the flash													*/
  var updateInc;																													/* increment value to apply															*/																
  var delay_ms;																														/* loop delay																						*/
	  
  //Grab
  menu_glow = document.getElementById('menuGlow');
  currOpacity = menu_glow.style.opacity;
  updateInc = (dir) ? (+0.025):(-0.025);

  //Prepare
  delay_ms = (dir == true) ? 3:44;
	  
  //Condition str ('px'!)
  currOpacity = parseFloat(currOpacity, 10);	  
	  	  
  //(Pre) stop at edge conditions
  if(dir == true) {																												/* increasing visibility																*/
    if(currOpacity >= 0.35) {																							/* stop & complete shading effect												*/ 		  	
  	  glowEffect = false;
  	  menu_glow.style.opacity = 0.40;																		 /* to stop this trigger on next call										*/ 
  	  setTimeout(run_menuGlow, 190, false);
  	  return;
    }					
  } else {																																/* decreasing visibility																*/
	if(currOpacity <= 0.0) {																							/* stop & complete shading effect												*/
	  menu_glow.style.opacity = 0;																				/* behind & transulescent																*/
	  menu_glow.style.zIndex  = 0;	
	  return; 
	}					
  }
	  
  var newVal = currOpacity + updateInc;
  menu_glow.style.opacity = newVal; 

  //loop!
  setTimeout(run_menuGlow, delay_ms, glowEffect);
}

/************************************************************************************************************************************/
/** @fcn        menuSel()
 *  @brief      check glowEffect, and move to completed val
 *  @details	  uses 'glowEffect' to complete this
 */ 																													                                                               
/************************************************************************************************************************************/
function halt_menuGlow() {
	
  //Locals
  var menu_glow;																														/* menu glow image																			*/ 
  var currOpacity;
  
  //Grab
  menu_glow = document.getElementById('menuGlow');

  //Update
  menu_glow.style.opacity = 0;																							/* behind & transulescent																*/
  menu_glow.style.zIndex  = 0;	
}

