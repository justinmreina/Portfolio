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
 *
 *  @section 		Opens
 *  		consider cleaning form a little, tighter?
 */ 																													                                                               
/************************************************************************************************************************************/
function onkeydown_resp() {

  //Locals
	var ctrlSel;																															/* is ctrl selected?																		*/
	var shiftSel;																															/* is shift selected?																		*/
	var keyPress;                                                             /* key that was pressed                                 */

  //Check Key & State
	ctrlSel  = event.ctrlKey;
	shiftSel = event.shiftKey;
	keyPress = event.key;

  //Handle
  if(keyPress=="ArrowLeft") {
    recordArrowActivity(keyPress);    
  } else if(keyPress=="ArrowRight") {
    recordArrowActivity(keyPress);    
  } else if(keyPress=="H") {
  	if(shiftSel) {
  		clickResp("Home");
  	}
  } else if(keyPress=="E") {
  	if(shiftSel) {
  		clickResp("Embedded");
  	}
  } else if(keyPress=="S") {
  	if(shiftSel) {
  		clickResp("Software");
  	}
  } else if(keyPress=="R") {
  	if(shiftSel) {
  		clickResp("Prototyping");
  	}
  } else if(keyPress=="T") {
  	if(shiftSel) {
  		clickResp("Prototyping");
  	}
  } else if(keyPress=="U") {
  	if(shiftSel) {
  		clickResp("Utilities");
  	}
  } else if(keyPress=="X") {
  	if(shiftSel) {
  		clickResp("Sandbox");
  	}
  } else if(keyPress=="P") {
  	if(shiftSel) {
  		clickResp("Portfolio");
  	}
  } else if(keyPress=="D") {
  	if(shiftSel) {
  		clickResp("Dev");
    }
  } else if(keyPress=="c") {
			if(ctrlSel) {
				clickResp("Contact");
			}
		} else if(keyPress=="m") {
			if(ctrlSel) {
				var isOpen = (document.getElementById("mySidenav").style.width) == "225px";

				if(!isOpen) {
					openNav();
				} else {
					closeNav();
				}
			}
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

