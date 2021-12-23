/************************************************************************************************************************************/ 
/** @file		  data.js
 * 	@brief		data description for use
 * 	@details	x
 */
/************************************************************************************************************************************/ 

//Constants
const SIGN_SEL_TOGGLE_X_THRESH = (screen.width-105);                        /* threshold for return to home select                  */

//Variables
var x = null;                                                               /* X location of mouse                                  */
var y = null;                                                               /* Y location of mouse                                  */


/************************************************************************************************************************************/
/** @fcn		  getSideNavWidth()
 *  @brief	  get side nav width for use
 *  @details 	accomodate for content the menu overlaps smoothly
 *
 *  @ret  (String) field width (e.g. "123px")
 */ 																													                                                               
/************************************************************************************************************************************/
function getSideNavWidth() {

	//Locals
	var isMobile;																															/* is the page served to a mobile device?								*/
	var width;																																/* width to apply																				*/
	var scale;																																/* scale to apply to the page 													*/
	var resp;																																	/* response string																			*/

	//Check
	isMobile = getDeviceType();
	scale    = getPageMenuScale();

	//Return value
	if(isMobile) {
		width = (SIDENAV_WIDTH_MOBILE*scale);
	} else {
		width = (SIDENAV_WIDTH_DESK*scale);
	}

	respStr = width + "px";

	return respStr;
}
    
    
/************************************************************************************************************************************/
/** @fcn		    onMouseUpdate(e)
 *  @brief			respond to mouse activity
 *  @details	  x                       				
 * 																						
 *  @param		  [in] (event) e - mouse event
 */ 																													                                                               
/************************************************************************************************************************************/
function onMouseUpdate(e) {
  x = e.pageX;
  y = e.pageY;
  console.log(x, y);
}


/************************************************************************************************************************************/
/** @fcn		    getMouseX()
 *  @brief			get x location of mouse
 *  @details	  x                       				
 * 																						
 *  @ret (int) x location of mouse
 */ 																													                                                               
/************************************************************************************************************************************/
function getMouseX() {
  return x;
}


/************************************************************************************************************************************/
/** @fcn		    getMouseY()
 *  @brief			get y location of mouse
 *  @details	  x                       				
 * 																						
 *  @ret (int) y location of mouse
 */ 																													                                                               
/************************************************************************************************************************************/
function getMouseY() {
  return y;
}

