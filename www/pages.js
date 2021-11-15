/************************************************************************************************************************************/ 
/** @file		  pages.js
 * 	@brief		setup information for web pages
 * 	@details	heights, colors & names
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/** @fcn          getPageSize(page) 							
 *  @brief        get the selected page's size    
 *  @details	  x                       				
 * 																						
 *  @param		  [in] (string) page - page for selection         												                                       
 */ 																													                                                               
/************************************************************************************************************************************/
function getPageSize(page) {
  
  switch(page) {
    case 'Home':
      return '950px';
    case "Embedded":
      return '1200px';
    case "Software":
      return '1000px';
    case "Prototyping":
      return '400px';
    case "Utilities":
      return '400px';
    case "Dev":
      return '500px';
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

