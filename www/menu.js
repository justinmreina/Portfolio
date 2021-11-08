/************************************************************************************************************************************/ 
/* @file		  menu.js
 * 	@brief		menu response activities
 * 	@details	x
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/* @fcn		    menuSel()
 * @brief			open or close the menu sidebar
 * @details	  x
 */ 																													                                                               
/************************************************************************************************************************************/
function menuSel() {

	var x = document.getElementById("mySidenav").style.width;

	if(x > "0px") {
		closeNav();
	} else {
		openNav();
	}
}

/************************************************************************************************************************************/
/* @fcn		    openNav()
 * @brief			open the side navigation menu
 * @details	  x
 */ 																													                                                               
/************************************************************************************************************************************/
function openNav() {
	document.getElementById("mySidenav").style.width = SIDENAV_WIDTH;
}

/************************************************************************************************************************************/
/* @fcn		    closeNav()
 * @brief			close the side navigation menu
 * @details	  x
 */ 																													                                                               
/************************************************************************************************************************************/
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

/************************************************************************************************************************************/
/* @fcn		    clickResp(msg)
 * @brief			Switch page & update header bar
 * @details	  x
 * 			
 * @param		[in] (string) msg - Message to display on header bar
 */ 																													                                                               
/************************************************************************************************************************************/
function clickResp(msg) {

	//Get page info
	var filename   = getPageFileName(msg); 
	var pageHeight = getPageSize(msg);

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

