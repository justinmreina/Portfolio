/************************************************************************************************************************************/ 
/* @file		  pages.js
 * 	@brief		setup information for web pages
 * 	@details	heights, colors & names
 */
/************************************************************************************************************************************/ 


/************************************************************************************************************************************/
/* @fcn		    getPageSize(page) 							
 * @brief			get the selected page's size    
 * @details	  x                       				
 * 																						
 * @param		  [in] (string) page - page for selection         												                                       
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
    case "T&M Content":
      return '400px';
    case "Apps":
      return '400px';
    case "Smart Home":
      return '400px';
    case "Prototyping":
      return '400px';
    case "Helpful Things":
      return '400px';
    case "Dev":
      return '500px';
    case "Shared Sandbox":
      return '400px';
    case "Portfolio Short":
      return '950px';
    case "Contact":
      return '1500px';
    default:
      alert("Error at getPageSize() for '" + page +"' selection");
      return 'oops';
  }
}


/************************************************************************************************************************************/
/* @fcn		    getPageFileName(page)
 * @brief			get the filename for selected page	
 * @details	  x                       						
 * 																								
 * @param		  [in] (string) page - page for selection         												                                       
 * 																													                                                                 
 * @section   Opens																					                                                                 
 * 		 condense data here to structs												                                                                 
 *
/************************************************************************************************************************************/ function getPageFileName(page) {
  
  switch(page) {
    case 'Home':
      return 'home.html';
    case "Embedded":
      return 'embedded.html';
    case "Software":
      return 'software.html';
    case "T&M Content":
      return 'test.html';
    case "Apps":
      return 'apps.html';
    case "Smart Home":
      return 'smarts.html';
    case "Prototyping":
      return 'proto.html';
    case "Helpful Things":
      return 'util.html';
    case "Dev":
      return 'dev.html';
    case "Shared Sandbox":
      return 'sandbox.html';
    case "Portfolio Short":
      return 'short.html';
    case "Contact":
      return 'contact.php';
    default:
      alert("Error at getPageFileName() for '" + page +"' selection");
      return 'oops';
  }
}

