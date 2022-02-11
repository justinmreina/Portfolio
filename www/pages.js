/************************************************************************************************************************************/ 
/** @file		  pages.js
 * 	@brief		setup information for web pages
 * 	@details	heights, colors & names
 */
/************************************************************************************************************************************/ 

//Constants
const SIDENAV_WIDTH_DESK   = "225";                                         /* width of menu bar for desktop                        */
const SIDENAV_WIDTH_MOBILE = "425";                                         /* width of menu bar for mobile                         */


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
  
  //Init
  header_init();
  menu_init();
  currentPage = "Home";

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
 *  @details	  x                       				
 * 																						
 *  @param		  [in] (string) page - page for selection         												                                       
 *
 *  @section    Opens
 *      move information to database access
 */ 																													                                                               
/************************************************************************************************************************************/
function getPageHeight(page) {
  
  switch(page) {
    case 'Home':
      return '1200px';
    case "Embedded":
      if(getDeviceType()) {
        return '2000px';                                                    /* T: mobile                                            */
      } else {
        return '1500px';                                                    /* F: Desktop                                           */
      }
    case "Software":
      return '1150px';
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
      return '1400px';														/* 600 pre pdf 											*/
    case "Sandbox":
      if(getDeviceType()) {
      	return '1300px';                                                    /* T: mobile                                            */
      } else {
        return '900px';                                                     /* F: Desktop                                           */
      }
    case "Portfolio":
      return '950px';
    case "Contact":
      return '700px';
    default:
//    alert("Error at getPageHeight() for '" + page +"' selection");
      return 'oops';
  }
}


/************************************************************************************************************************************/
/** @fcn        getPageFileName(page)
 *  @brief      get the filename for selected page
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
    case "Troll":
      return 'proto.html';
    case "Utilities":
      return 'util.html';
    case "Dev":
      return 'dev/pdf.html';
    case "Sandbox":
      return 'sandbox.html';
    case "Portfolio":
      return 'portfolio.html';
    case "Contact":
      return 'contact.php';
    default:
//    alert("Error at getPageFileName() for '" + page +"' selection");
      return 'oops';
  }
}


/************************************************************************************************************************************/
/** @fcn        getPageInd(page)
 *  @brief      get the index for menu of page
 *  @details	  x
 *
 *  @param		  [in] (string) page - page for selection
 */
/************************************************************************************************************************************/
function getPageInd(page) {

  switch(page) {
    case 'Home':
      return 0;
    case "Embedded":
      return 1;
    case "Software":
      return 2;
    case "Prototyping":
      return 3;
    case "Troll":
      return 3;
    case "Utilities":
      return 4;
    case "Sandbox":
      return 5;
    case "Portfolio":
      return 6;
    case "Dev":
      return 7;
    default:
//    alert("Error at getPageFileName() for '" + page +"' selection");
      return 'oops';
  }
}


/************************************************************************************************************************************/
/** @fcn        getPageMenuScale()
 *  @brief      get the index for menu of page
 *  @details	  x
 *
 *  @ret 		(double) fraction of menu width for coverage of page contents (e.g. "1.0" for no changes)
 */
/************************************************************************************************************************************/
function getPageMenuScale() {

  switch(currentPage) {
    case 'Home':
      return 1.2;
    case "Embedded":
      return 1.0;
    case "Software":
      return 0.9;
    case "Prototyping":
      return 0.8;
    case "Troll":
      return 0.8;
    case "Utilities":
      return 1.0;
    case "Sandbox":
      return 1.0;
    case "Portfolio":
      return 1.0;
    case "Dev":
      return 1.0;
    default:
//    alert("Error at getPageFileName() for '" + page +"' selection");
      return 1.0;
  }
}


/************************************************************************************************************************************/
/** @fcn        idx_PageName(field)
 *  @brief      load pagename for selected menu index
 *  @details	  x                       						
 * 																								
 *  @param		  [in] (string) field - field query
 *
/************************************************************************************************************************************/
function idx_PageName(field) {

  if(field=='home') {
    return "Home"; 
  } else if(field=='embedded') {
    return "Embedded"; 
  } else if(field=='software') {
    return "Software"; 
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
  } else if(field=='contact') {
    return "Contact"; 
  } else {
    return;
  }
}


/************************************************************************************************************************************/
/** @fcn        idx_getFileName(field)
 *  @brief      get the filename to load for subpage
 *  @details	  x                       						
 * 																								
 *  @param		  [in] (string) field - field query
 *
 *  @section    Opens
 *      this naming is sloppy clean that up
 *      three fcns here is sloppy too fix this
 *
/************************************************************************************************************************************/
function idx_getFileName(field) {

  //Locals
	var pageName;                                                             /* page name for request (e.g. "Prototyping")           */
	var fileName;                                                             /* filename for that page (e.g. "proto.html")           */

	pageName = idx_PageName(field);

	fileName = getPageFileName(pageName);

	return fileName;
}


/************************************************************************************************************************************/
/** @fcn        idx_PageSize(field)
 *  @brief      load page size for selected menu index
 *  @details	  x                       						
 * 																								
 *  @param		  [in] (string) field - field query
 *
 *  @section  Opens
 *      Is this even needed?
 *
/************************************************************************************************************************************/
function idx_PageSize(field) {

  //Locals`
  var pageName;
  var size;
  
  
  //URL Field->Page
  pageName = idx_PageName(field);
  
  //Grab Size
  size = getPageHeight(pageName);

  return size;
}

