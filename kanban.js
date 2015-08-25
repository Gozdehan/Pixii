$(".fa-plus").click(function(){
	$(".task-page-background").css({
		display: "block"
	});
});

$(".task-create a").click(function() {
	var hedef = $(this).attr("data-hedef");


  if(hedef=="general-box"){
      
	    $(".general-box").css({
	   		display:"block"
	   });
	
       $(".dates-box").css({
	      display: "none"
       });
       $(".subtasks-box").css({
	      display: "none"
        });
  }
  else if(hedef=="dates-box"){

  	     $(".general-box").css({
	   		display:"none" 
	   });
	
       $(".dates-box").css({
	      display: "block"
       });
       $(".subtasks-box").css({
	      display: "none"
        });
  }
  else{
  	    $(".general-box").css({
	   		display:"none"
	   });
	
       $(".dates-box").css({
	      display: "none"
       });
       $(".subtasks-box").css({
	      display: "block"
        });
  }
});

$(".fa-times").click(function(){
	$(".task-page-background").css({
		display: "none"
	});
});

$(".fa-expand").click(function(){
   $(".task-page").css({
		height: "550px",
		width: "670px"
	});

});

$("button").click(function(){
   var buton = $(this).attr("data-name");

   if(buton=="cancel"){
     $(".task-page-background").css({
		display: "none"
	});
   }
});


	  