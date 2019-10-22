const xo = ["X","O"];
let zeroOrone = 0;

function setDivsToSquare(){
	const boardChildrenDivs = document.getElementById("board").children;
	for(let i = 0; i < boardChildrenDivs.length; i++){
		boardChildrenDivs[i].classList.add("square");
	}
}

function setDivToXorY(){
	const divs = document.querySelectorAll("#board > div");
	for(let i = 0; i < divs.length; i++){
		
		divs[i].onclick = function(){
			if (divs[i].innerHTML === ""){
				divs[i].textContent = xo[zeroOrone];
				divs[i].classList.add(xo[zeroOrone]);
				changeValue();
				announceWinner(checkFor3InRow(0,0));
			}
		}
	}
}

function changeValue(){
	if(zeroOrone === 0){
		zeroOrone = 1;
	}
	else if(zeroOrone === 1){
		zeroOrone = 0;
	}
}

function mouseOver(){
	const divs = document.querySelectorAll("#board > div");
	for(let i = 0; i < divs.length; i++){
		divs[i].onmouseover = function(){
			divs[i].classList.add("hover");
		}
		divs[i].onmouseout = function(){
			divs[i].classList.remove("hover");
		}
	}
}

function checkFor3InRow(row,col){
	const divs = document.querySelectorAll("#board > div");	
	if(row > 6 || col > 2){
		return;
	}

	else if(divs[0+row].innerHTML === "X" && divs[1+row].innerHTML === "X" && divs[2+row].innerHTML === "X"){
		return "X";
	}
	else if(divs[0+col].innerHTML === "X" && divs[3+col].innerHTML === "X" && divs[6+col].innerHTML === "X"){
		return "X";
	}
	else if(divs[0].innerHTML === "X" && divs[4].innerHTML === "X" && divs[8].innerHTML === "X"){
		return "X";
	}
	else if(divs[2].innerHTML === "X" && divs[4].innerHTML === "X" && divs[6].innerHTML === "X"){
		return "X";
	}
	else if(divs[0+row].innerHTML === "O" && divs[1+row].innerHTML === "O" && divs[2+row].innerHTML === "O"){
		return "O";
	}
	else if(divs[0+col].innerHTML === "O" && divs[3+col].innerHTML === "O" && divs[6+col].innerHTML === "O"){
		return "O";
	}
	else if(divs[0].innerHTML === "O" && divs[4].innerHTML === "O" && divs[8].innerHTML === "O"){
		return "O";
	}
	else if(divs[2].innerHTML === "O" && divs[4].innerHTML === "O" && divs[6].innerHTML === "O"){
		return "O";
	}
	else{
		return checkFor3InRow(row+3,col+1);	
	}
}

function announceWinner(xOro){
	const status = document.getElementById("status");
	if(xOro === "X"){
		status.classList.add("you-won");
		status.innerHTML = "Congratulations! X is the Winner!";
	}
	else if(xOro === "O"){
		status.classList.add("you-won");
		status.innerHTML = "Congratulations! O is the Winner!";
	}
	else{
		return;
	}
}

function restartGame(){
	const button = document.querySelector("button");
	const divs = document.querySelectorAll("#board > div");
	const status = document.getElementById("status");
	button.addEventListener('click', event => {
		status.textContent = "Move your mouse over a square and click to play an X or an O.";
		status.classList.remove("you-won");
		for(let i = 0; i < divs.length; i++){
			divs[i].textContent = "";
			divs[i].classList.remove("X","O");
		}
	});	
}

function startGame(){
	setDivsToSquare();
	setDivToXorY();
	mouseOver();
	restartGame();
}

window.onload = start;