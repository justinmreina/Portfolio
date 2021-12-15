/************************************************************************************************************************************/ 
/** @file		  menu.js
 * 	@brief		menu response activities
 * 	@details	x
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
  menuBar.style.width = "0px";                                          /* closed                                               */    
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
 *  @details	  x
 * 			
 *  @param		[in] (string) msg - Message to display on header bar
 */ 																													                                                               
/************************************************************************************************************************************/
function clickResp(msg) {

  //Locals
  var filename;                                                             /* filename for prospect load                           */
  var pageHeight;                                                           /* disp height for prospect load                        */


	//Get page info
	filename   = getPageFileName(msg); 
	pageHeight = getPageSize(msg);

	//close & pause
	closeNav();
	delay_ms(250);

	//Load page
	document.getElementById('centerpage').src = filename;
	fitMain(pageHeight);

	//Update Header Bar
	updateHeader(msg);

	//Scroll & Reset
	scrollToTop();  
}

