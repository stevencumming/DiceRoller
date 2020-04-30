/*
	This is the javascript file.
	It's split into two main sections, runtime scripts (basically control the main flow of the program.
		Think of the whole section like the main function in a C# program.
	The other section is for support functions that are called by the major functions. Short useful things etc

	So far there are three 'screens'. Technically they're invisible objects that get swapped in and out of the main
	placeholder, but for our purposes they can be thought of as screens. I've created the framework to support this.

	You guys shouldn't have to touch anything outside of your own screen functions, if you are - you're probably doing
	something wrong. Everything should be contained to your own main function (e.g. SplashScreen()), and your own
	container in index.html down the bottom. Please try and keep the html file light, the bulk of the code should be here.

	As far as styling, please use the stylesheet style.css. There should BE NO INLINE CSS STYLING. If it's more complicated
	than <h1 style="color:blue"> IT BELONGS IN THE STYLESHEET.
	The CSS stylesheet doesn't have to be kept too organised (it doesn't matter - it's a stylesheet, it doesn't execute code).

	Use your browser to check for javascript errors as you code. 
 */




// GLOBAL Variables
var main;
var menuScreen;
var splashScreen;
var gameScreen;




// Runtime Scripts:
function Startup() {
	// Startup function:

	// Associate DOM to global objects:
	main			= document.getElementsByTagName("main")[0];		// Main container

	splashScreen 	= document.getElementById("splashScreen");		// Splash screen container
	menuScreen 		= document.getElementById("menuScreen");		// Menu Screen container
	gameScreen 		= document.getElementById("gameScreen");		// Game Screen container
	
	SplashScreen();													// Move to SplashScreen()
}

function SplashScreen() {
	// Called immediately on startup

	// Switch content
	main.innerHTML = splashScreen.innerHTML;

	// Do stuff...

	window.setTimeout(MenuScreen, 3000);					// Call next screen in 3 seconds (3000 milliseconds):
}

function MenuScreen() {
	// Function is called after the splash screen is shown

	// Switch content
	main.innerHTML = menuScreen.innerHTML;

	// Do stuff...

	// EXAMPLE CODE:
	// Grab buttons as objects
	var btn_option1 = document.getElementById("btn_option1");
	var btn_option2 = document.getElementById("btn_option2");
	var btn_option3 = document.getElementById("btn_option3");
	var btn_option4 = document.getElementById("btn_option4");

	// Initialise Click Handlers and set what happens when you click them:
	btn_option1.addEventListener("click", GameScreen); 
		// Remember that you don't put parenthesis for the function call GameScreen NOT GameScreen()

	// You can even put your own 'sub'-function inside too, or put it down in the support functions section
	btn_option2.addEventListener("click", function() {
		alert("Hello World!");
	});




}

function GameScreen() {
	// Function is called when user enters game screen (presses button in menu)

	// Switch content
	main.innerHTML = gameScreen.innerHTML;

	// Do Stuff...

	// EXAMPLE CODE:
	// Grab buttons as objects
	var btn_spin = document.getElementById("btn_spin");
	var btn_menu = document.getElementById("btn_menu");
    
	// Initialise Click Handlers and set what happens when you click them:
	btn_spin.addEventListener("click", Spin);
	btn_menu.addEventListener("click", MenuScreen);

}

function DiceSide() {
    var side = document.getElementById("selSide").value;
    var dice = 0;

    if (side == "6") {
        dice = 6;
    }
    else if (side == "8") {
        dice = 8;
    }
    else if (side == "12") {
        dice = 12;
    }
    else if (side == "20") {
        dice = 20;
    }

    return dice;

}



// Support Functions:
function Spin() {
    var num = DiceSide();
	UpdateImage("dice1", getRandomNumber(1, num));
	UpdateImage("dice2", getRandomNumber(1, num));
	UpdateImage("dice3", getRandomNumber(1, num));
	UpdateImage("dice4", getRandomNumber(1, num));
}

function getRandomNumber(min, max) {
	// Gives a random number between two numbers
	return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function UpdateImage(dice_id, number) {
	var myBackgroundImage = "";
	switch(number) {
		case 1:
			myBackgroundImage = "url('assets/d1.svg')";
			break;
		case 2:
			myBackgroundImage = "url('assets/d2.svg')";
			break;
		case 3:
			myBackgroundImage = "url('assets/d3.svg')";
			break;
		case 4:
			myBackgroundImage = "url('assets/d4.svg')";
			break;
		case 5:
			myBackgroundImage = "url('assets/d5.svg')";
			break;
		case 6:
			myBackgroundImage = "url('assets/d6.svg')";
            break;
        case 7:
            myBackgroundImage = "url('assets/d7.svg')";
            break;
        case 8:
            myBackgroundImage = "url('assets/d8.svg')";
            break;
        case 9:
            myBackgroundImage = "url('assets/d9.svg')";
            break;
        case 10:
            myBackgroundImage = "url('assets/d10.svg')";
            break;
        case 11:
            myBackgroundImage = "url('assets/d11.svg')";
            break;
        case 12:
            myBackgroundImage = "url('assets/d12.svg')";
            break;
        case 13:
            myBackgroundImage = "url('assets/d13.svg')";
            break;
        case 14:
            myBackgroundImage = "url('assets/d14.svg')";
            break;
        case 15:
            myBackgroundImage = "url('assets/d15.svg')";
            break;
        case 16:
            myBackgroundImage = "url('assets/d16.svg')";
            break;
        case 17:
            myBackgroundImage = "url('assets/d17.svg')";
            break;
        case 18:
            myBackgroundImage = "url('assets/d18.svg')";
            break;
        case 19:
            myBackgroundImage = "url('assets/d19.svg')";
            break;
        case 20:
            myBackgroundImage = "url('assets/d20.svg')";
            break;
        
	}
	document.getElementById(dice_id).style.backgroundImage = myBackgroundImage;
}

