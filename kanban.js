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


   $(".cancel").click(function(){
     $(".task-page-background").css({
    display: "none"
  });

   });

  /* $(".saveClose").click(function(){
     alert("veri okunup kapatılacak");
   });

   $(".saveMore").click(function(){
     alert("xxx");
   }); */


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

  /*$(".body-board").click(function(){
    if("block" == $(".submenu").css("display")){
     $(".submenu").css({
          display:"none"
        });
   }
   });*/

   $(document).ready(function(){
     var index = null;
     
    $(".fa-plus").click(function(){
       index = $(this).closest("th").index()
       console.log(index)
   });

     $(".saveClose").click(function(){
        $("#board-table tbody th:nth-child(1)").append("deneme1");
        return false;     
     });  
   });

   $(".settings").click(function(){
     if("none" == $(".popoverMenu").css("display")){
       $(".popoverMenu").css({
        display:"block"
       });
     }
     else if("block" == $(".popoverMenu").css("display")){
       $(".popoverMenu").css({
         display: "none"
       });
     }
   });

  $(".reports").click(function(){
     if("none" == $(".popoverReports").css("display")){
       $(".popoverReports").css({
        display:"block"
       });
     }
     else if("block" == $(".popoverReports").css("display")){
       $(".popoverReports").css({
         display: "none"
       });
     }
   });

