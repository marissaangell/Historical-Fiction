$(".section2-col").mouseenter(function(){
  $("#col2-1").removeClass("col-3")
  $("#col2-2").removeClass("col-3")

  $("#col2-1").removeClass("col-7")
  $("#col2-2").removeClass("col-7")

  $(this).addClass("col-7")

  $("#col2-1").addClass("col-2")
  $("#col2-2").addClass("col-2")
})

$(".section3-col").mouseenter(function(){
  $("#col3-1").removeClass("col-3")
  $("#col3-2").removeClass("col-3")
  $("#col3-3").removeClass("col-3")

  $("#col3-1").removeClass("col-5")
  $("#col3-2").removeClass("col-5")
  $("#col3-3").removeClass("col-5")

  $(this).addClass("col-5")

  $("#col3-1").addClass("col-1")
  $("#col3-2").addClass("col-1")
  $("#col3-3").addClass("col-1")
})

$(".section4-col").mouseenter(function(){
  $("#col3-1b").removeClass("col-3")
  $("#col3-2b").removeClass("col-3")
  $("#col3-3b").removeClass("col-3")

  $("#col3-1b").removeClass("col-5")
  $("#col3-2b").removeClass("col-5")
  $("#col3-3b").removeClass("col-5")

  $(this).addClass("col-5")

  $("#col3-1b").addClass("col-1")
  $("#col3-2b").addClass("col-1")
  $("#col3-3b").addClass("col-1")
})


$(".section2-col").mouseleave(function(){
  $("#col2-1").removeClass("col-2")
  $("#col2-2").removeClass("col-2")

  $("#col2-1").removeClass("col-7")
  $("#col2-2").removeClass("col-7")

  $("#col2-1").addClass("col-3")
  $("#col2-2").addClass("col-3")
})

$(".section3-col").mouseleave(function(){
  $("#col3-1").removeClass("col-1")
  $("#col3-2").removeClass("col-1")
  $("#col3-3").removeClass("col-1")

  $("#col3-1").removeClass("col-5")
  $("#col3-2").removeClass("col-5")
  $("#col3-3").removeClass("col-5")

  $("#col3-1").addClass("col-3")
  $("#col3-2").addClass("col-3")
  $("#col3-3").addClass("col-3")
})

$(".section4-col").mouseleave(function(){
  $("#col3-1b").removeClass("col-1")
  $("#col3-2b").removeClass("col-1")
  $("#col3-3b").removeClass("col-1")

  $("#col3-1b").removeClass("col-5")
  $("#col3-2b").removeClass("col-5")
  $("#col3-3b").removeClass("col-5")

  $("#col3-1b").addClass("col-3")
  $("#col3-2b").addClass("col-3")
  $("#col3-3b").addClass("col-3")
})
