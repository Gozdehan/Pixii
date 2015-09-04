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