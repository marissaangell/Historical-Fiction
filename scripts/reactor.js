var count = 1;

$(document).keypress(function(event){ 
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13'){
  	var currID = "#typewriter-".concat(count);
  	var curr = document.getElementById(currID);
  	console.log(currID);

  	curr.classList.add("typewriter-before");
  	$("#typewriter-".concat(count + 1)).classList.remove("typewriter-before");
  	$("#typewriter-".concat(count + 1)).classList.add("typewriter");
  }
})