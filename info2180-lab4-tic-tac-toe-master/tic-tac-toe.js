const boardChildrenDivs = document.getElementById("board").children;

function setDivsToSquare(){
	for(let i = 0; i < boardChildrenDivs.length; i++){
		boardChildrenDivs[i].setAttribute("class","square");
	}
}

window.onload = setDivsToSqaure();


