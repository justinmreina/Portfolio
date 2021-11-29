/************************************************************************************************************************************/ 
/** @file		  pages.js
 * 	@brief		setup information for web pages
 * 	@details	heights, colors & names
 */
/************************************************************************************************************************************/ 

//Constants
const SIDENAV_WIDTH_DESK   = "225px";                                       /* width of menu bar for desktop                        */
const SIDENAV_WIDTH_MOBILE = "425px";                                       /* width of menu bar for mobile                         */


/************************************************************************************************************************************/
/** @fcn        pages_init()
 *  @brief      initialize the pages on webpage first load
 *  @details	  x                       				
 */ 																													                                                               
/************************************************************************************************************************************/
function pages_init() {
  
  //Locals`
  var d;
  var isMobile;
  
  //Check
  isMobile = getDeviceType();
  
  //Init Header
  header_init();

  //Mobile Updates
  if(isMobile) {
    
    //mainDiv
    d = document.getElementById('mainDiv');
    d.style.height="1400px";
  }
}

/************************************************************************************************************************************/
/** @fcn        getPageHeight(page) 							
 *  @brief      get the selected page's size    
 *  @details	  query interface for page height update
 * 																						
 *  @param		  [in] (string) page - page name for selection (e.g. "Embedded")
 *
 *  @section    Opens
 *      move information to database access
 */ 																													                                                               
/************************************************************************************************************************************/
function getPageHeight(page) {
  
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
    case "Troll":
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
      alert("Error at getPageHeight() for '" + page + "' selection");
      return;
  }
}


/************************************************************************************************************************************/
/** @fcn        getPageFileName(page)
 *  @brief      get the filename for selected page	
 *  @details	  query interface for page filename for access
 * 																								
 *  @param		  [in] (string) page - page name for selection (e.g. "Embedded")
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
    case "Troll":
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
      alert("Error at getPageFileName() for '" + page + "' selection");
      return;
  }
}


/************************************************************************************************************************************/
/** @fcn        idx_getPageName(field)
 *  @brief      load pagename for selected menu index
 *  @details	  using the input idx field of the url
 * 																								
 *  @param		  [in] (string) field - field query
 *
/************************************************************************************************************************************/
function idx_getPageName(field) {

  if(field=='home') {
    return "Home"; 
  } else if(field=='embedded') {
    return "Embedded"; 
  } else if(field=='software') {
    return "Software"; 
  } else if(field=='test') {
    return "T&M Content"; 
  } else if(field=='apps') {
    return "Apps"; 
  } else if(field=='smart') {
    return "Smart Home"; 
  } else if(field=='proto') {
    return "Prototyping"; 
  } else if(field=='troll') {
    return "Prototyping"; 
  } else if(field=='util') {
    return "Utilities"; 
  } else if(field=='dev') {
    return "Dev"; 
  } else if(field=='cows') {
    return "Dev"; 
  } else if(field=='sandbox') {
    return "Sandbox"; 
  } else if(field=='portfolio') {
    return "Portfolio"; 
  } else {
    return;
  }
}

/************************************************************************************************************************************/
/** @fcn        idx_getFileName(field)
 *  @brief      get the filename to load for subpage
 *  @details	  using the input idx field of the url                      						
 * 																								
 *  @param		  [in] (string) field - field query
 *
/************************************************************************************************************************************/
function idx_getFileName(field) {
  
  //Locals
	var pageName;                                                             /* name of page (e.g. "Embedded")                       */
	var filename;                                                             /* name of file (e.g. "embedded.html")                  */

  //Process
	pageName = idx_getPageName(field);
	filename = getPageFileName(pageName);

	return filename;
}

