// right and left slider by onclick
var pos = 0;

right2.onclick = function(){
	if(pos > -400){
		pos = pos - 100;
		galeryImage2.style.left = pos + "%";
	}
	else if(pos == -400){
		pos = 0;
		galeryImage2.style.left = pos + "%";	
	}
}
left2.onclick = function(){
	if(pos < 0){
		pos = pos + 100;
		galeryImage2.style.left = pos + "%";
	}
}
// right and left slider by onclick end