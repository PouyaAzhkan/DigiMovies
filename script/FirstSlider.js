// right and left slider by onclick
var pos = 0;

right1.onclick = function(){
	if(pos > -300){
		pos = pos - 92.5;
		galeryImage1.style.left = pos + "%";
	}
	else if(pos == -300){
		pos = 0;
		galeryImage1.style.left = pos + "%";	
	}
}

left1.onclick = function(){
	if(pos < 0){
		pos = pos + 92.5;
		galeryImage1.style.left = pos + "%";
	}
}
// right and left slider by onclick end