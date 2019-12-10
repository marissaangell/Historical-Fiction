var count = 1;

$(document).keypress(function(event){ 
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13'){
  	count++;

  	var currID = "#typewriter-".concat(count.toString());
  	var curr = $(currID);

  	
  	curr.removeClass("typewriter-before");
  	curr.addClass("typewriter");
  }
})

