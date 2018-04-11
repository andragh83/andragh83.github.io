
var numSquares = 6
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {
	setupModeBtns();
	setupSquares();
	reset();
}

function setupModeBtns() {
	for(var i = 0; i < modeBtn.length; i++) {	
		modeBtn[i].addEventListener("click", function(){
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}	
}

function setupSquares() {
	for (var i = 0; i < squares.length; i++) {
	// add click listeners to squares
		squares[i].addEventListener("click", function() {
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare to the picked color
			if (clickedColor===pickedColor) {
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again!"

			} else { this.style.backgroundColor="#232323";
					 messageDisplay.textContent = "Try Again!"
			  }
		
		});
	}

}

function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
	colorDisplay.textContent = pickedColor;
		for (var i = 0; i < squares.length; i++) {
					if(colors[i]){
					squares[i].style.display = "block";
					squares[i].style.backgroundColor = colors[i];
					} else { squares[i].style.display = "none";};
		}
}


resetButton.addEventListener ("click", function(){
				reset();
	});


function changeColors(color){
			for (var i = 0; i < squares.length; i++) {
				squares[i].style.backgroundColor = color;
			};
			
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

//generate RGB Element
function rgbElement() {
	var randomColor = Math.floor(Math.random() * 256);
	return randomColor;
}

//generate RGB
function randomColor (){
	return "rgb(" + rgbElement() + ", " + rgbElement() + ", " + rgbElement() + ")";
}

//generate colos array
function generateRandomColors(num) {
	var array = [];
	for (i = 0; i < num; i++) {
		array.push(randomColor());
	}
return array;
}
