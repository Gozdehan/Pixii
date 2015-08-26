$(".fa-plus").click(function(){
	$(".task-page-background").css({
		display: "block"
	});
	$(".task-create li:first-child a").addClass("selected");

});

$(".task-create li a").click(function() {
	var hedef = $(this).attr("data-hedef");

  if(hedef=="general-box"){
    $(".task-create li a").removeClass("selected");
  	$(this).addClass("selected");

      
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
     $(".task-create li a").removeClass("selected");
  	 $(this).addClass("selected");


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

     $(".task-create li a").removeClass("selected");
  	 $(this).addClass("selected");

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
		width: "670px",
		marginLeft:"-345px",
		marginTop:"-275px"
	});

   $(this).removeClass("fa-expand"),
   $(this).addClass("fa-compress"),

$(".fa-compress").click(function(){
    $(".task-page").css({
       height: "482px",
       width: "460px",
	     marginLeft: "-230px",
       marginTop: "-241px"
	});
   $(this).removeClass("fa-compress"),
   $(this).addClass("fa-expand")
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


	  