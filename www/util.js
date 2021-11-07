/************************************************************************************************************************************/ 
/* @file		  util.js
 * 	@brief		common utilities
 * 	@details	x
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/* @fcn		    getDeviceType()
 * @brief			check if mobile or desktop
 * @details	  left uncondensed for simplicity & clarity for later use                       				
 * 																						
 * @ret   (bool) device type - T:mobile, F: desktop 
 */ 																													                                                               
/************************************************************************************************************************************/
function getDeviceType() {

  //Locals
  var type;

  //Find type
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    type = true;
  } else {
    type = false;
  }

  return type;
}


/************************************************************************************************************************************/
/* @fcn		    printMsg(state, action, msg)
 * @brief			debussing header slide
 * @details	  x
 *
 * @param [in] (string) state - state of message print
 * @param [in] (string) action - action causing response
 * @param [in] (string) msg - details for message
 */ 																													                                                               
/************************************************************************************************************************************/
function printMsg(state, action, msg) {
  console.log("[" + state + ":" + action + "] " + msg);
}
