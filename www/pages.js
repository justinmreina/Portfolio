/************************************************************************************************************************************/ 
/** @file		  pages.js
 * 	@brief		setup information for web pages
 * 	@details	heights, colors & names
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/** @fcn        getPageSize(page) 							
 *  @brief      get the selected page's size    
 *  @details	  x                       				
 * 																						
 *  @param		  [in] (string) page - page for selection         												                                       
 *
 *  @section    Opens
 *      move information to database access
 */ 																													                                                               
/************************************************************************************************************************************/
function getPageSize(page) {
  
  switch(page) {
    case 'Home':
      return '1100px';
    case "Embedded":
      if(getDeviceType()) {
        return '1800px';                                                    /* T: mobile                                            */
      } else {
        return '1200px';                                                    /* F: Desktop                                           */
      }
    case "Software":
      return '1000px';
    case "Prototyping":
      return '1300px';
    case "Utilities":
      if(getDeviceType()) {
        return '800px';                                                     /* T: mobile                                            */
      } else {
        return '400px';                                                     /* F: Desktop                                           */
      }
    case "Dev":
      return '600px';
    case "Sandbox":
      return '400px';
    case "Portfolio":
      return '950px';
    case "Contact":
      return '1000px';
    default:
      alert("Error at getPageSize() for '" + page +"' selection");
      return 'oops';
  }
}


/************************************************************************************************************************************/
/** @fcn          getPageFileName(page)
 *  @brief        get the filename for selected page	
 *  @details	  x                       						
 * 																								
 *  @param		  [in] (string) page - page for selection         												  
 *
 *  @section    Opens
 *      move information to database access
 *
/************************************************************************************************************************************/
function getPageFileName(page) {
  
  switch(page) {
    case 'Home':
      return 'home.html';
    case "Embedded":
      return 'embedded.html';
    case "Software":
      return 'software.html';
    case "Prototyping":
      return 'proto.html';
    case "Utilities":
      return 'util.html';
    case "Dev":
      return 'dev/cows.html';
    case "Sandbox":
      return 'sandbox.html';
    case "Portfolio":
      return 'portfolio.html';
    case "Contact":
      return 'contact.php';
    default:
      alert("Error at getPageFileName() for '" + page +"' selection");
      return 'oops';
  }
}

