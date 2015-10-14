$(document).ready(function(){
   $(".help").click(function(){
      $(".help-page").css({
        display: "block"
       });
  $(".helpDialog-tabs li:first-child a").addClass("selected-tab");
    }); 
});

$(".help-header .fa-times").click(function(){
   $(".help-page").css({
    display: "none"
   });
});

$(".helpDialog-tabs li a").click(function(){
  var name = $(this).attr("data-name");

  if(name == "quick help"){
     $(".helpDialog-tabs li a").removeClass("selected-tab")
     $(this).addClass("selected-tab")

     $(".qH-content").css({
       display:"block"
     });

     $(".ask-content").css({
     	display:"none"
     });
    
    $(".giveFeedback-content").css({
    	display:"none"
    });

    $(".tutorial-content").css({
    	display:"none"
    });
  }
  else if(name == "ask a question"){
  	$(".helpDialog-tabs li a").removeClass("selected-tab")
     $(this).addClass("selected-tab")

     $(".qH-content").css({
       display:"none"
     });

     $(".ask-content").css({
     	display:"block"
     });
    
    $(".giveFeedback-content").css({
    	display:"none"
    });

    $(".tutorial-content").css({
    	display:"none"
    });
  }
  else if(name == "give feedback"){
  	$(".helpDialog-tabs li a").removeClass("selected-tab")
     $(this).addClass("selected-tab")

     $(".qH-content").css({
       display:"none"
     });

     $(".ask-content").css({
     	display:"none"
     });
    
    $(".giveFeedback-content").css({
    	display:"block"
    });

    $(".tutorial-content").css({
    	display:"none"
    });
  }
  else{
  	$(".helpDialog-tabs li a").removeClass("selected-tab")
     $(this).addClass("selected-tab")

     $(".qH-content").css({
       display:"none"
     });

     $(".ask-content").css({
     	display:"none"
     });
    
    $(".giveFeedback-content").css({
    	display:"none"
    });

    $(".tutorial-content").css({
    	display:"block"
    });
  }
});