$(document).ready(function(){
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
 });

$(document).ready(function(){
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
});