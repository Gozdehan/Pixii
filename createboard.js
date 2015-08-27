$(".alert-box .fa-times").click(function(){
   var exit = $(this).attr("data-exit");

   if(exit=="exit"){
     $(".alert-box").css({
		display: "none"
	});
   }
});

$(".alert-box-content button").click(function(){
   var exit = $(this).attr("data-exit");

   if(exit=="ok"){
     $(".alert-box").css({
		display: "none"
	});
   }
});

$(".cBset-footer button").click(function(){

   

	    $(".alert-box").css({
		display: "block"
	});


});