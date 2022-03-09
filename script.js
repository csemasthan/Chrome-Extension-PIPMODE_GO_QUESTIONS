// Main content of the question
var QUESTION_CONTENT = document.getElementsByClassName('qa-q-view-content')[0]; 

void function Create_PIPBOX(){  
	var QUESTION_PIPBOX = document.createElement('div');
    QUESTION_PIPBOX.setAttribute('id','PIPBOX');
    QUESTION_PIPBOX.innerHTML = "<div id=\"PIPBOX_Header\"></div><div id=\"PIPBOX_Content\"></div>";
    document.body.append(QUESTION_PIPBOX);
    document.getElementById("PIPBOX_Header").innerHTML="PIP MODE of Question<span id='close' style=\"float:right;\">X</span>";
	document.getElementById("PIPBOX_Content").innerHTML=QUESTION_CONTENT.innerHTML;
	document.getElementById("close").onclick=function Close_PIPBOX(){document.getElementById("PIPBOX").remove();};

/*
	1. creating Main division
	2. setting id for the Main Division, for further reference
	3. Creating two divisions in the Main division, 
	4. Display the main division on the page
	5. Content of the Division_Header
	6. Content of the Division_Content
	7. Script for Deleting the Main division from the page.
*/

}();

    // Calling the function with Required DIVISION ID
    dragElement(document.getElementById("PIPBOX"));

// Well known Draggable function for an element script adding
function dragElement(elmnt){
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	if (document.getElementById("PIPBOX_Header")) {
			document.getElementById("PIPBOX_Header").onmousedown = dragMouseDown;
	} else {
			elmnt.onmousedown = dragMouseDown;
	}

	function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
	}

	function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	}

	function closeDragElement() {
			// stop moving when mouse button is released:
			document.onmouseup = null;
			document.onmousemove = null;
	}
}


// Well known VISIBLE of an element script adding
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const question_visible = document.querySelector('.qa-q-view-content');

// Attaching the VISIBLE script to Event scroll
document.addEventListener('scroll', function () {
    isInViewport(question_visible) ? 
	(document.getElementById("PIPBOX") === null ? "": document.getElementById("PIPBOX").style.visibility="hidden") 
	: (document.getElementById("PIPBOX") === null ? "": (document.getElementById("PIPBOX").style.visibility="visible",document.getElementById("PIPBOX_Content").innerHTML=QUESTION_CONTENT.innerHTML));
	

}, {
    passive: true
});