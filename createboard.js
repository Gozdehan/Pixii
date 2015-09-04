$(".alert-box .fa-times").click(function(){
   var exit = $(this).attr("data-exit");

   if(exit=="exit"){
    $(".alert-box-background").css({display:"none"}), $(".alert-box").css({
		display: "none"
	});
   }
});

$(".alert-box-content button").click(function(){
   var exit = $(this).attr("data-exit");

   if(exit=="ok"){
    $(".alert-box-background").css({display:"none"}), $(".alert-box").css({
		display: "none"
	});
   }
});

$(".cBset-footer button").click(function(){
    
    if(!$("#board-name").val()){
	    $(".alert-box-background").css({display:"block"}), $(".alert-box").css({
    display: "block"
  });
}
});

 $(".open-close").click(function(){
      if("none" == $(".submenu").css("display")){
        $(".submenu").css({
          display:"block"
        });
     } 
     else if("block" == $(".submenu").css("display")){
        $(".submenu").css({
          display:"none"
        });
      }
   });