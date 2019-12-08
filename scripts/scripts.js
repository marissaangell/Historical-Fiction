//Index.html
$("#credits-button").click(function(){ 
  $("#menu").hide(); 
  $("#credits").show(); 
})

$("#back-button").click(function(){ 
  $("#credits").hide(); 
  $("#menu").show(); 
})

// T-60.html
$("#t60-1-b2").click(function(){ 
  $("#t60-1").hide(); 
  $("#t60-2").show(); 
})

//Dialogue trees (up to 4 buttons)
$("#t-b1").click(function(){ 
  $("#t-main").hide(); 
  $("#t-1").show(); 
})

$("#t-1-back").click(function(){ 
  $("#t-1").hide(); 
  $("#t-main").show(); 
})

$("#t-b2").click(function(){ 
  $("#t-main").hide(); 
  $("#t-2").show(); 
})

$("#t-2-back").click(function(){ 
  $("#t-2").hide(); 
  $("#t-main").show(); 
})

$("#t-b3").click(function(){ 
  $("#t-main").hide(); 
  $("#t-3").show(); 
})

$("#t-3-back").click(function(){ 
  $("#t-3").hide(); 
  $("#t-main").show(); 
})

$("#t-b4").click(function(){ 
  $("#t-main").hide(); 
  $("#t-4").show(); 
})

$("#t-4-back").click(function(){ 
  $("#t-4").hide(); 
  $("#t-main").show(); 
})

//Deeper Trees
$("#t-1-b1").click(function(){ 
  $("#t-1").hide(); 
  $("#t-1-1").show(); 
})

$("#t-1-1-back").click(function(){ 
  $("#t-1-1").hide(); 
  $("#t-1").show(); 
})

$("#t-1-b2").click(function(){ 
  $("#t-1").hide(); 
  $("#t-1-2").show(); 
})

$("#t-1-2-back").click(function(){ 
  $("#t-1-2").hide(); 
  $("#t-1").show(); 
})