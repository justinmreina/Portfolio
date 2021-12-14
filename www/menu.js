/************************************************************************************************************************************/ 
/** @file		  menu.js
 * 	@brief		menu response activities
 * 	@details	x
 */
/************************************************************************************************************************************/ 


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

