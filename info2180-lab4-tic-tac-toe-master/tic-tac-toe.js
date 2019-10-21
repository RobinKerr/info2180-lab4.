function setDivsToSquare(){
	const boardChildrenDivs = document.getElementById("board").children;
	for(let i = 0; i < boardChildrenDivs.length; i++){
		boardChildrenDivs[i].setAttribute("class","square");
	}
}

window.onload = setDivsToSquare();


