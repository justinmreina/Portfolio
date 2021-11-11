/************************************************************************************************************************************/ 
/*  @file		data.js
 * 	@brief		data description for use
 * 	@details	x
 */
/************************************************************************************************************************************/ 

//Constants
const SIGN_SEL_TOGGLE_X_THRESH = (screen.width-105);                        /* threshold for return to home select                  */


/************************************************************************************************************************************/
/* @fcn		  getSideNavWidth()
 * @brief	  get side nav width for use
 * @details	  x                       				
 *
 * @ret  (String) field width (e.g. "123px")
 */ 																													                                                               
/************************************************************************************************************************************/
function getSideNavWidth() {

	//Locals
	var isMobile;

	//Check
	isMobile = getDeviceType();

	//Return value
	if(isMobile) {
		return SIDENAV_WIDTH_MOBILE;
	} else {
		return SIDENAV_WIDTH_DESK;
	}
}


/************************************************************************************************************************************/
/*                                                           MOUSE LOCATION                                                         */
/************************************************************************************************************************************/
var x = null;
var y = null;
    
//@todo   header    
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  console.log(x, y);
}

//@todo   header
function getMouseX() {
  return x;
}

//@todo   header
function getMouseY() {
  return y;
}

