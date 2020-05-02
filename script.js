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
	dndScreen       = document.getElementById("dndScreen");
	
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
	btn_option2.addEventListener("click", DndScreen);




}

function GameScreen() {
	// Function is called when user enters game screen (presses button in menu)

	// Switch content
	main.innerHTML = gameScreen.innerHTML;

	// Do Stuff...
	//initialise die style propertiers
	//IniDie();

	// EXAMPLE CODE:
	// Grab buttons as objects
	var btn_spin = document.getElementById("btn_spin");
	var btn_menu = document.getElementById("btn_menu");
	var btn_add = document.getElementById("btn_add");
	var btn_hide = document.getElementById("btn_hide");

	// Initialise Click Handlers and set what happens when you click them:
	btn_spin.addEventListener("click", RollDie);
	btn_menu.addEventListener("click", MenuScreen);
	btn_hide.addEventListener("click", RemoveDie);
	btn_add.addEventListener("click", AddDie);
}

function DndScreen() {
	main.innerHTML = dndScreen.innerHTML;

	var btn_roll = document.getElementById("btn_roll");
	var btn_menu = document.getElementById("btn_menu");
	
	btn_roll.addEventListener("click", DndRoll);
	btn_menu.addEventListener("click", MenuScreen);
}











// Support Functions:
function DndRoll() {
	UpdateImage("d20", getRandomNumber(1, 20));
	UpdateImage("d12", getRandomNumber(1, 12));
}

function RollDie() {
	var i;
	var spinCount = 5; // number of times to spin
	
	for(i = 0; i < spinCount; i++) {
		var delay = 5 * Math.abs(-10 * i * (i - 5)); // formula to calculate delay in ms
		window.setTimeout(Spin, delay);
	}
}

function Spin() {
	UpdateImage("dice1", getRandomNumber(1, 6));
	UpdateImage("dice2", getRandomNumber(1, 6));
	UpdateImage("dice3", getRandomNumber(1, 6));
	UpdateImage("dice4", getRandomNumber(1, 6));
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
	}
	document.getElementById(dice_id).style.backgroundImage = myBackgroundImage;
}

/*
function IniDie() {
	document.getElementById("dRow1").classList.toggle("hidden");
	document.getElementById("dRow2").classList.toggle("hidden");
	document.getElementById("dRow3").classList.toggle("hidden");
	document.getElementById("dRow4").classList.toggle("hidden");
} */

function GetNumberOfDie() {
	var numDie = 4; //dice 1 will never be invisible
	var i;
	
	for(i = 2; i < 5; i++) {
		var dieID = "dRow" + i; //will go from dRow2 to dRow4
		
		if (document.getElementById(dieID).classList.contains("hidden")) {
			numDie -= 1;
		}
	}
			
	return numDie;
}

function RemoveDie() {
	var numDie = GetNumberOfDie();
	if (numDie <= 1) {
		return;
	}
	
	var dieID = "dRow" + numDie; //get non-invisible die
	
	//make it hidden
	ChangeVisibility(dieID, "remove");
}

function ChangeVisibility(id, action) {
	if (action == "add") {
		document.getElementById(id).classList.remove("hidden");
	} 
	else {
		document.getElementById(id).classList.add("hidden");
	}
}

function AddDie() {
	var numDie = GetNumberOfDie();
	if (numDie >= 4) {
		return;
	}
	
	var dieID = "dRow" + (numDie + 1); //get invisible die
	
	//make it visible
	ChangeVisibility(dieID, "add");
}