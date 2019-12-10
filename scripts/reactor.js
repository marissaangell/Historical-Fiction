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

// SET POWER

$('#power-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    	var input = $("#power-input").val();
        if (power_validate(input)){
        	$("#power-output").val(input);
        }
    }

});

function power_validate(input){
	if (input.match(/[a-zA-Z]$/) || input == ""){
		event.stopPropagation();
		alert("Invalid input. Try again.");
		return false;
	} else {
		$("#power-input").attr("readonly", "readonly");
		return true;
	}

}

// SET XENON

$('#xenon-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    	var input = $("#xenon-input").val();
        if (xenon_validate(input)){
        	if (input.toLowerCase() == "y"){
        		$("#xenon-input").val("Xenon injection activated.");
        	} else if (input.toLowerCase() == "n"){
        		
        	}
        }
    }

});

function xenon_validate(input){
	if (!(input.toLowerCase()).match("y") && !(input.toLowerCase()).match("n")){
		event.stopPropagation();
		alert("Invalid input. Try again.");
		return false;
	} else {
		$("#power-input").attr("readonly", "readonly");
		return true;
	}
}