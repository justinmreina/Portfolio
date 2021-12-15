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
  span = document.getElementById("menu_sel_" + sel_index);													/* boot sel: Home																				*/
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
	document.getElementById("mySidenav").style.width = getSideNavWidth();
}


/************************************************************************************************************************************/
/** @fcn		    closeNav()
 *  @brief			close the side navigation menu
 *  @details	  x
 */ 																													                                                               
/************************************************************************************************************************************/
function closeNav() {
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
	pageHeight = getPageSize(msg);
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

	//Update Header Bar
	updateHeader(msg);

	//Scroll & Reset
	scrollToTop();  
}

