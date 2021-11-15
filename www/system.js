/************************************************************************************************************************************/ 
/** @file		  util.js
 *  @brief		common utilities
 *  @details	x
 */
/************************************************************************************************************************************/ 

//Globals
var openArrow;                                                              /* flag to indicate open key press for response         */


/************************************************************************************************************************************/
/** @fcn		    onkeydown_resp()
 *  @brief			Respond to keyboard activity
 *  @details	  All key presses recorded to console for development
 *
 *  @section   Events
 *      - ArrowLeft:  Cycle one project back in prototypes
 *      - ArrowRight: Cycle one project forward in prototypes
 */ 																													                                                               
/************************************************************************************************************************************/
function onkeydown_resp() {

  //Locals
  var keyPress;                                                             /* key that was pressed                                 */

  //Check Key
  keyPress = event.key;

  //Handle
  if(keyPress=="ArrowLeft") {
    recordArrowActivity(keyPress);    
  } else if(keyPress=="ArrowRight") {
    recordArrowActivity(keyPress);    
  }      

  console.log("onkeydown_resp(): " + keyPress + " was selected");
}


/************************************************************************************************************************************/
/** @fcn		  recordArrowActivity(arrowSel)
 *  @brief	      x
 *  @details	  x
 *
 *  @param [in] (String) arrowSel - "ArrowLeft" or "ArrowRight"
 */ 																													                                                               
/************************************************************************************************************************************/
function recordArrowActivity(arrowSel) {
  
  if(arrowSel == "ArrowLeft" ) {
    openArrow = "ArrowLeft";
  } else if(arrowSel == "ArrowRight" ){
    openArrow = "ArrowRight";
  }
  
  console.log("I found: " + arrowSel + ", and updated to " + openArrow);
}


/************************************************************************************************************************************/
/** @fcn		  isOpenArrow()
 *  @brief	      x
 *  @details	  x
 *
 *  @return  (bool) is there an open arrow to respond to
 */ 																													                                                               
/************************************************************************************************************************************/
function isOpenArrow() {
  
  //Locals
  var isOpen;                                                               /* is there a pending arrow selection for resp?         */
  
  //Check
  isOpen = ((arrowSel == "ArrowLeft" ) || (arrowSel == "ArrowRight" ));
  
  return isOpen;
}


/************************************************************************************************************************************/
/** @fcn      getOpenArrow()
 *  @brief		x
 *  @details  x
 *
 *  @return  (String) open arrow for response ("ArrowLeft" or "ArrowRight")
 */ 																													                                                               
/************************************************************************************************************************************/
function getOpenArrow() {
  
  //Locals
  var respStr;
  
  //Process
  if(isOpenArrow()) {
    respStr = arrowSel;
  } else {
    respStr = ""                                                            /* return blank if not selected                         */
  }
  
  return respStr;
}

