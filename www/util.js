/************************************************************************************************************************************/
/** @file		  util.js
 *  @brief		common utilities
 * 	@details	x
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/** @fcn        getDeviceType()
 *  @brief      check if mobile or desktop
 *  @details	  left uncondensed for simplicity & clarity for later use                       				
 * 																						
 *  @ret   (bool) device type - T:mobile, F: desktop 
 */ 																													                                                               
/************************************************************************************************************************************/
function getDeviceType() {

  //Locals
  var type;                                                                 /* type of display environment                          */
  

  //Find type
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    type = true;
  } else {
    type = false;
  }

  return type;
}


/************************************************************************************************************************************/
/** @fcn        printMsg(state, action, msg)
 *  @brief      debussing header slide
 *  @details	  x
 *
 *  @param [in] (string) state - state of message print
 *  @param [in] (string) action - action causing response
 *  @param [in] (string) msg - details for message
 */ 																													                                                               
/************************************************************************************************************************************/
function printMsg(state, action, msg) {
  console.log("[" + state + ":" + action + "] " + msg);
}


/************************************************************************************************************************************/
/** @fcn      round10(num, digits)
 *  @brief		round off the digits
 *  @details	x
 *
 *  @param [in] (float) num - x
 *  @param [in] (int) diigits - x
 *
 *  @ret   (float) rounded number
 *
 *  @section   Example             
 *      round10(1.2345678,3) -> 1.234
 *      1.2345678 - 0.0005678				
 *      Shift Up, Floor, Shift down 	
 *      Find diff										
 *
 */ 																													                                                               
/************************************************************************************************************************************/
function round10(num, digits) {
  
  //Locals
  var ret;

  //Find ovf
  ret = num * (10**digits);
  ret = Math.floor(ret);
  ret = ret / (10**digits);

  return ret;
}


/************************************************************************************************************************************/
/** @fcn		    getPosStr()
 *  @brief		  get current position in string form
 *  @details	  x
 *
 *  @ret 	(string) posStr = "X:x, Y:y, W:w, H:h, S:s"
 */ 																													                                                               
/************************************************************************************************************************************/
function getPosStr() {

	//Locals
	var str;
	
	//Assemble
	str = "X: " + round10(logo_pos.x,2) + ", Y: " + round10(logo_pos.y,2) + ", W: " + round10(logo_pos.width,2) + ", H: " + round10(logo_pos.height,2) + ", S: " + round10(logo_pos.scale,2);

	return str;
}    


/************************************************************************************************************************************/
/** @fcn		    fitMain(size)
 *  @brief		  fit the subpage window to a specified height
 *  @details	  x
 *
 *  @param		[in] (int) size - height to resize the window in pixels
 */ 																													                                                               
/************************************************************************************************************************************/
function fitMain(size) {
	var sec = document.getElementById("mainDiv");
	sec.style.height=size;									                              		/* Resize table                                         */
} 		


/************************************************************************************************************************************/
/** @fcn		    scrollToTop()
 *  @brief		  scroll window to top of screen
 *  @details	  x
 *
 *  @ret 	(string) posStr = "X:x, Y:y, W:w, H:h, S:s"
 */ 																													                                                               
/************************************************************************************************************************************/
function scrollToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}


/************************************************************************************************************************************/
/** @fcn        delay_ms(miliseconds)
 *  @brief		  delay routine
 *  @details	  x
 *
 *  @param		[in] (int) miliseconds - time value for delay in miliseconds
 */ 																													                                                               
/************************************************************************************************************************************/
function delay_ms(miliseconds) {

	var startTime = new Date().getTime();

	while((startTime + miliseconds) >= (new Date().getTime())) {
	}
}

