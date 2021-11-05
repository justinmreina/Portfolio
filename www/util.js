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

