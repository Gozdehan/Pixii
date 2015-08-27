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

function makeBigger(){
    $(".task-page").css({
    height: "550px",
    width: "670px",
    marginLeft:"-345px",
    marginTop:"-275px"
  });

   $(".buyut-kucult").removeClass("fa-expand").addClass("fa-compress");
}

function makeSmaller(){
  $(".task-page").css({
       height: "482px",
       width: "460px",
       marginLeft: "-230px",
       marginTop: "-241px"
  });
   $(".buyut-kucult").removeClass("fa-compress").addClass("fa-expand");
}

$(".buyut-kucult").click(function(){
  if (true == $(this).hasClass("fa-expand")) {
      makeBigger();
  } else {
      makeSmaller();
  }

  return false;
});


$("button").click(function(){
   var buton = $(this).attr("data-name");
   concole.log(buton);

   if(buton=="cancel"){
     $(".task-page-background").css({
    display: "none"
  });
   }
   /*else{
    $(".task-page-background").css({
    display: "block"
  });
   }*/
});

/*$("#board-table thead th").click(function(){
    $(this).css({
      width:"20px",
    });
    $(this).removeClass("fa-plus");
});*/


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

   