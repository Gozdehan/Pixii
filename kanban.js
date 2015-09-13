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

 var menuDurumAcik = false;
    function menuKapat () {
      if (true == menuDurumAcik) {
        $(".submenu").css({
          display:"none"
        });

        menuDurumAcik = false;
      }
        
    }

	 $(".open-close").click(function(){
      if("none" == $(".submenu").css("display")){        
        $(".submenu").css({
          display:"block"
        });

        setTimeout(function () {
          menuDurumAcik = true;
        }, 10);  

     } 
     else if("block" == $(".submenu").css("display")){
        menuKapat();
      }
   });

  $("body").click(menuKapat);

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
       index = $(this).closest("th").index();

       console.log(index)
   });

     $(".saveClose").click(function(){
      console.log("#board-table tbody th:nth-child(" + (index + 1) + ")");
        $("#board-table tbody th:nth-child(" + (index + 1) + ")").append("deneme1");
        return false;     
     });  
   });


  /* $(".settings").click(function(){
     if("none" == $(".popoverMenu").css("display")){
       $(".popoverMenu").css({
        display:"block"
       });
     }
     else if("block" == $(".popoverMenu").css("display")){
       $(".popoverMenu").css({
         display: "none"
       });
     } */

     var settingsAcik = false;
       function settingsKapat(){
         if(true == settingsAcik){
           $(".popoverMenu").css({
             display: "none"
           });
           settingsAcik = false;
         }
       }
   $(".settings").click(function(){
     if("none" == $(".popoverMenu").css("display")){
       $(".popoverMenu").css({
        display:"block"
       });
   setTimeout(function(){
    settingsAcik = true;
   },10);
  }

   else if("block" == $(".popoverMenu").css("display")){
      settingsKapat();
   }
   });
   $("body").not(".soundOn-off").click(settingsKapat);


   var reportsAcik = false;
       function reportsKapat(){
         if(true == reportsAcik){
           $(".popoverReports").css({
             display: "none"
           });
           reportsAcik = false;
         }
       }
   $(".reports").click(function(){
     if("none" == $(".popoverReports").css("display")){
       $(".popoverReports").css({
        display:"block"
       });
   setTimeout(function(){
    reportsAcik = true;
   },10);
  }

   else if("block" == $(".popoverReports").css("display")){
     reportsKapat();
   }
   });
   $("body").click(reportsKapat);

  /*$(".reports").click(function(){
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
   });  */

  
  function makeOn(){
   $(".hiddenColorMenu").css({
     display: "block"
   });
   $("#board-table").css({
    height: "550px"
   });
  $(".colorOn-off").removeClass("off").addClass("on");
 }

 function makeOff(){
   $(".hiddenColorMenu").css({
     display: "none"
   });
   $("#board-table").css({
    height: "560px"
   });
  $(".colorOn-off").removeClass("on").addClass("off");
 }
  
$(".colorOn-off").click(function(){
  if(true == $(this).hasClass("off")){
    makeOn();
  }else{
    makeOff();
  }
  return false;
}); 

$(".soundOn-off").click(function(){
  if(true == $(this).hasClass("off")){
    $(".soundOn-off").removeClass("off").addClass("on");
  }else{
    $(".soundOn-off").removeClass("on").addClass("off");
  }

});

   var selectMenuAcik = false;
      function selectKapat() {
        if(true == selectMenuAcik){
          $(".selectBoardMenu").css({
            display: "none"
          });
          selectMenuAcik = false;
        }
      }

 $(".selectBoard").click(function(){
   if("none" == $(".selectBoardMenu").css("display")){
    $(".selectBoardMenu").css({
      display: "block"
    });

     setTimeout(function(){
    selectMenuAcik = true;
   },10);

  }

  else if("block" == $(".selectBoardMenu").css("display")){
    selectKapat();
  }
});

$("body").click(selectKapat);



      
