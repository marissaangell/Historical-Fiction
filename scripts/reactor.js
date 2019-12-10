var count = 1;
var targetPower;
var xenonBool;
var numControlRods = 0;

$(document).keypress(function(event){ 
  var keycode = (event.keyCode ? event.keyCode : event.which);
  if (keycode == '13'){
  	if (count != 14){
  		count++;

	  	var currID = "#typewriter-".concat(count.toString());
	  	var curr = $(currID);

	  	
	  	curr.removeClass("typewriter-before");
	  	curr.addClass("typewriter");
  	}

  	if (count == 20){
  		validate_answers();
  	}
  }
})

// SET POWER

$('#power-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    	var input = $("#power-input").val();
        if (power_validate(input)){
        	$("#power-output").val(input);
        	targetPower = input;
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
        		$("#xenon-output").val("Starting xenon injection.");
        		xenonBool = true;
        	} else if (input.toLowerCase() == "n"){
        		$("#xenon-output").val("Xenon injection aborted.");
        		xenonBool = false;
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
		$("#xenon-input").attr("readonly", "readonly");
		return true;
	}
}

// CONTROL BOOL

$('#control-bool-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    	var input = $("#control-bool-input").val();
        if (control_bool_validate(input)){
        	if (input.toLowerCase() == "y"){
        		event.stopPropagation();
        		
        		//go to to insert rods section
        		count = 16;

        		var currID = "#typewriter-".concat(count.toString());
			  	var curr = $(currID);

			  	curr.removeClass("typewriter-before");
			  	curr.addClass("typewriter");
        	} else if (input.toLowerCase() == "n"){
        		event.stopPropagation();
        		
        		//skip insert rods section
        		count = 18;

        		var currID = "#typewriter-".concat(count.toString());
			  	var curr = $(currID);

			  	curr.removeClass("typewriter-before");
			  	curr.addClass("typewriter");
        	}
        }
    }

});

function control_bool_validate(input){
	if (!(input.toLowerCase()).match("y") && !(input.toLowerCase()).match("n")){
		event.stopPropagation();
		alert("Invalid input. Try again.");
		return false;
	} else {
		$("#control-bool-input").attr("readonly", "readonly");
		return true;
	}
}

// CONTROL ROD NUM

$('#control-num-input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
    	var input = $("#control-num-input").val();
        if (control_num_validate(input)){
        	$("#control-num-output").val(input);
        	numControlRods = input;
        }
    }

});

function control_num_validate(input){
	if (input.match(/[a-zA-Z]$/) || input == "" || input > 211 || input < 0){
		event.stopPropagation();
		alert("Invalid input. Try again.");
		return false;
	} else {
		$("#control-num-input").attr("readonly", "readonly");
		return true;
	}

}

// ANSWER VALIDATION

function validate_answers(){
	var targetPowerCorrect = (targetPower > 700 && targetPower < 5000);
	var xenonCorrect = !xenonBool;
	var numControlRodsCorrect = (numControlRods > 25 && numControlRods < 101);

	if (targetPowerCorrect && xenonCorrect && numControlRodsCorrect){
		$("#result").val("Reactor output at normal levels.");
		$("#result").attr("style", "color: green; width: 600px;");

		setTimeout(function(){ 
        	$("#success").removeClass("typewriter-before");
    	}, 3000);  

	} else {
		$("#result").val("WARNING: Reactor output rising. Meltdown imminent.");
		$("#result").attr("style", "color: red; width: 825px;");
		
		setTimeout(function(){ 
        	$("#failure").removeClass("typewriter-before");
    	}, 3000);  
	}
}