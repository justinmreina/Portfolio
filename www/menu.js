/************************************************************************************************************************************/ 
/** @file		  menu.js
 * 	@brief		menu response activities
 * 	@details	x
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/** @fcn        menuSel()
 *  @brief      open or close the menu sidebar
 *  @details	  update menu to current selection page (highlighting & size to fit contents overlap)
 */ 																													                                                               
/************************************************************************************************************************************/
function menuSel() {
  
  //Locals
	var width;                                                                /* current width of page menu bar                       */
	var currId;																																/* current id of menu selection (curr page disp)				*/


	//Grab
  width  = document.getElementById("mySidenav").style.width;
  currId = getPageId();																											/* e.g. 'menu_sel_0'																		*/

  //Toggle Menu
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
	document.getElementById("mySidenav").style.width = getMenuWidth(currentPage);
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
  var pageId;																																/* e.g. 'menu_sel_0' for 'Home'													*/

	//Get page info
	filename    = getPageFileName(msg);
	pageHeight  = getPageSize(msg);
	currentPage = msg;																												/* keep track of current page														*/
	pageId      = getPageId();

  //Reset Highlights
  for(var i=0; i<NUM_MENU_SEL; i++) {
  	document.getElementById("menu_sel_" + i).style.color ="#818181";
  }

  //Update Highlight
  document.getElementById(pageId).style.color = "#C2C2C2";

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

