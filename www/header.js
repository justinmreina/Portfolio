/************************************************************************************************************************************/ 
/* @file		header.js
 * 	@brief		features & state for the upper header bar
 * 	@details	x
 */
/************************************************************************************************************************************/ 

//Setup
const XWIDTH = window.innerWidth;                                           /* width of screen display                              */

//Constants
const SCROLL_DX = 15;
const SCROLL_DS = 0.985;

const DT_SLIDE_OUT_MS = 25;
const DT_SLIDE_IN_MS  = 25;

const SLIDE_DELAY_MS = 50;                                                  /* delay before beginning the slide in either dir       */

//Variables
var header_canvas;                                                          /* drawing canvas for upper header bar                  */
var header_ctx;                                                             /* drawing canvas context for render                    */
var moveTask;                                                               /* task for moving the signature logo                   */

var logo_img;                                                               /* header signature image                               */

var hdr = {
  dispName: "",                                                             /* name for display on the header bar                   */
  currTab:  "Home",                                                         /* sel tab for display, changes are immediate           */
  status:   "Center"                                                        /* Center/MovingOut/MovingBack/Right                    */
}

var logo_width  = (2000/15.4)*1.15;;                                        /* width of logo                                        */
var logo_height = (1240/15.4)/1.60;                                         /* height of logo                                       */
var logo_x0 = XWIDTH/2 - logo_width;                                        /* signature starting location                          */
var logo_y0 = 5;                                                            /* signature starting location                          */
var logo_pos = getSigInitPos();                                             /* position of signature image                          */

const DRAW_DX_OFFS_OUT = (XWIDTH-400);
const DRAW_DX_OFFS_IN  = (XWIDTH-600);
const LOGO_OUT_X_STOP  = (XWIDTH-150);
const LOGO_IN_X_STOP   = ((XWIDTH/2)-logo_width);


/************************************************************************************************************************************/
/* @fcn		    prepareSlide(dir, tab)
 * @brief	    setup state for next slide animation of logo
 * @details   x
 *
 * @param		  [in] (bool)   dir - direction to prepare (T: right, F: back to center)
 * @param		  [in] (string) tab - title of tab - ("Home", "Embedded", "Software", "T&M Content", "Apps", "Smart Home", "Prototyping", 
 *                                                 "Helpful Things", "Dev", "Shared Sandbox", "Portfolio Short" & "Contact")
 *
 * @post    tab is identified as the current tab & header (but not loaded by routine)
 */
/************************************************************************************************************************************/
function prepareSlide(dir, tab) {
	
  //Parse
  hdr.currTab  = tab;                                                       /* selection of current tab for disp                    */
  hdr.dispName = tab;                                                       /* name for header bar display                          */
  
  //Prepare
	if(dir) {																                                  /* moving to the right 	                                */
    hdr.status   = "MovingOut";
  } else {																                                  /* moving back to center	                              */
    hdr.status   = "MovingBack";
	}
}

/************************************************************************************************************************************/
/* @fcn		    header_init()
 * @brief	    initialize the header bar for use
 * @details	  x
 * 																						
 * @ret   () x - y
 *
 * @section 	Opens
 *		increase the menu font size for mobile (not working yet)
 */
/************************************************************************************************************************************/
function header_init() {
	
	//Locals
	var isMobile;																															/* check if run on mobile																*/
	
	//Check
	isMobile = getDeviceType();

	//Initialize header canvas
	header_canvas = document.getElementById("menuBar");
	header_ctx    = header_canvas.getContext("2d");    

	//Load Signature
	logo_pos = getSigInitPos();
	prepareSlide(true, "Home");
	
	//Load Home Page setup (full-size sign)
	signature_init(true);
	
	//Apply mobile updates
	if(isMobile) {		
		/********************************************************************************************************************************/
		/*																		             Menu Icon Size & Bar Height				 														              */
		/********************************************************************************************************************************/
		const menuIcon     = document.getElementById("menuIcon");
		const menuIconCell = document.getElementById("menuIconCell");

		menuIcon.style.height = "64px";	
		menuIcon.style.width  = "64px";

		menuIconCell.style.height ="74px";
		menuIconCell.style.width  ="74px";

		/********************************************************************************************************************************/
		/*																		                     Menu Text Sizes				 														                  */
		/********************************************************************************************************************************/
		//Menu Font Size
		for(var i=0; i<11; i++) {
	      var span = document.getElementById("something" + i);
	      span.style.fontSize = "60px";
	    }

	    //Menu Width
	    var menuBar = document.getElementById(mySidenav);
	    menuBar.style.width = "200px";
	}

	//Entry Message
	console.clear();
	console.log("Header initialized.");
}


/************************************************************************************************************************************/
/* @fcn		    updateHeader(page)0
 * @brief	    update the displayed page
 * @details	  sets page label & size
 * 																						
 * @param		  [in] (string) page - page for selection
 *
 * @warn    does not respond while slider in motion
 */
/************************************************************************************************************************************/
function updateHeader(page) {

	//Clear
	header_ctx.clearRect(0, 0, header_canvas.width, header_canvas.height);	
	
	//Update & Pause
  hdr.status = (page=="Home") ? "MovingBack" : "MovingOut";                 /* if moving towards 'Home' you are moving back         */
	delay_ms(SLIDE_DELAY_MS);

	//Update Display
	if((page == null)||(page == 'Home')) {
		prepareSlide(false, page);
		moveTask = setInterval(signature_move, DT_SLIDE_IN_MS);
		console.log("Begin move in");
	} else {
		prepareSlide(true, page);
		moveTask = setInterval(signature_move, DT_SLIDE_OUT_MS);
		console.log("Begin move out");
		logo_pos.scale = 1.0;																						        /* reset to full value (safety)	@todo needed? 				  */
	}
}


/************************************************************************************************************************************/
/*                                                            CONFIG                                                                */
/************************************************************************************************************************************/

/************************************************************************************************************************************/
/* @fcn		  getSigInitPos()
 * @brief	  get initial position of signature
 * @details	x
 * 																						
 * @ret 	(struct) pos = position of signature to begin
 */
/************************************************************************************************************************************/
function getSigInitPos() {

	let pos = {
		x: logo_x0,
		y: logo_y0,
		width:  logo_width,
		height: logo_height,
		scale: 1.0
	}

	return pos;
}

/************************************************************************************************************************************/
/* @fcn		    getSigIdlePos()
 * @brief	    get final position of signature
 * @details	  .45 scale emperically found static is sloppy (@open)
 * 																						
 * @ret 	(struct) pos = position of signature for subpages
 */
/************************************************************************************************************************************/
function getSigIdlePos() {

	var pos = {
		x: XWIDTH-102,
		y: 20,
		width:  logo_width*0.4,
		height: logo_height*0.4,
		scale: .45
	}

	return pos;
}


/************************************************************************************************************************************/
/*                                                          SIGNATURE LOGO                                                          */
/************************************************************************************************************************************/

/************************************************************************************************************************************/
/* @fcn		  signature_move()
 * @brief	  move the signature from center to right
 * @details	  x
 * 																						
 * @assum   not called while moving
 */
/************************************************************************************************************************************/
function signature_move() {

  //Pre(Safety)
  if((hdr.status == "Center")||(hdr.status == "Right")) {
    return;
  }

	//Clear Header
	header_ctx.clearRect(0, 0, header_canvas.width, header_canvas.height);	


	if(hdr.status == "MovingOut") {                                           /* moving out                                           */

		//Update Vars @todo     always do this?
		logo_pos.x += SCROLL_DX;
		logo_pos.y += SCROLL_DY;
		logo_pos.scale *= SCROLL_DS;
						
		//Draw Logo
		logo_img = new Image();
		logo_img.src = "img/Signature-logo_web.png";   
		logo_img.onload = function () { 
			header_ctx.drawImage(logo_img, logo_pos.x, logo_pos.y, logo_pos.width*logo_pos.scale, logo_pos.height*logo_pos.scale);
		}

		//Draw Text      
		if(logo_pos.x >DRAW_DX_OFFS_OUT) {

    if(hdr.currTab != "Home") {
				header_ctx.fillStyle = "#FFFFFF";                                   /* load tab text                                        */
				header_ctx.font = "30px Arial";
				header_ctx.fillText(hdr.dispName, (XWIDTH/2)-((2000/15.4)/2), 50);
			}
		}

		//Stop if complete
		if(logo_pos.x > LOGO_OUT_X_STOP ) {
			window.clearInterval(moveTask);
			prepareSlide(false, hdr.currTab);
			console.log("Move out complete");
		}
	} else {                                                                  /* moving in                                            */

		//Update Vars @todo     always do this?
		logo_pos.x -= SCROLL_DX;
		logo_pos.y -= SCROLL_DY; 
		logo_pos.scale /= SCROLL_DS;

		//Draw Logo
		logo_img = new Image();
		logo_img.src = "img/Signature-logo_web.png";   
		logo_img.onload = function () { 
			header_ctx.drawImage(logo_img, logo_pos.x, logo_pos.y, logo_pos.width*logo_pos.scale, logo_pos.height*logo_pos.scale);
		}			

		//Draw Text
		if(logo_pos.x < DRAW_DX_OFFS_IN) {

      if(hdr.status=="MovingBack") {
				
        var dispText = (hdr.dispName=="Home") ? "" : hdr.dispName;

        header_ctx.fillStyle = "#FFFFFF";                                   /* load tab text                                        */
				header_ctx.font = "30px Arial";
  			header_ctx.fillText(dispText, (XWIDTH/2)-((2000/15.4)/2), 50);
			}
		}

		//Stop if complete
		if(logo_pos.x < LOGO_IN_X_STOP) {
			window.clearInterval(moveTask);
			prepareSlide(true, hdr.currTab);          
			console.log("Move in complete: " + getPosStr());
			 
			//Reset  Position (safety)
			logo_pos = getSigInitPos();
		}
	}
}

/************************************************************************************************************************************/
/* @fcn		    signature_init(loc)
 * @brief	    init header signature for 'Home' page display
 * @details	  x
 * 																						
 * @ret   () x - y
 */
/************************************************************************************************************************************/
function signature_init() {

	var logo_img;                                                             /* header signature image                               */

	printMsg("Ff", "Sg", "signature_init()");
	
	//Load Signature
	logo_pos = getSigInitPos();
	logo_img = new Image();
	logo_img.src = "img/Signature-logo_web.png";   
	logo_img.onload = function () { 
		header_ctx.drawImage(logo_img, logo_pos.x, logo_pos.y, logo_pos.width*logo_pos.scale, logo_pos.height*logo_pos.scale);
	}			
}

