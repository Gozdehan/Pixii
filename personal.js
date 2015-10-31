$(document).ready(function(){
  $('.sidebar-list li a[data-sidebar="avatar"]').addClass('selected-sidebarList');

  $(".sidebar-list li a").click(function(){
	var type = $(this).attr("data-sidebar");
	console.log(type);
    
  if(type == "avatar"){
    $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");

        $(".userData-nameAvatar").css({
          display:"block"
        });
        $(".userData-dateTime").css({
          display:"none"
        });
        $(".userData-password").css({
          display:"none"
        });
        $(".userData-email").css({
          display:"none"
        });
         $(".userData-pGame").css({
          display:"none"
        });
         $(".userData-remove").css({
          display:"none"
        });
  }
    else if(type == "date"){
      $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");

        $(".userData-nameAvatar").css({
        	display:"none"
        });
        $(".userData-dateTime").css({
        	display:"block"
        });
        $(".userData-password").css({
          display:"none"
        });
        $(".userData-email").css({
          display:"none"
        });
        $(".userData-pGame").css({
          display:"none"
        });
        $(".userData-remove").css({
          display:"none"
        });
   }
   else if(type == "email"){
      $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");

         $(".userData-nameAvatar").css({
          display:"none"
        });
        $(".userData-dateTime").css({
          display:"none"
        });
        $(".userData-password").css({
          display:"none"
        });
        $(".userData-email").css({
          display:"block"
        });
        $(".userData-pGame").css({
          display:"none"
        });
        $(".userData-remove").css({
          display:"none"
        });
   }
   else if(type == "game"){
     $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");
        
        $(".userData-pGame").css({
          display:"block"
        });
        $(".userData-nameAvatar").css({
          display:"none"
        });
        $(".userData-dateTime").css({
          display:"none"
        });
        $(".userData-password").css({
          display:"none"
        });
        $(".userData-email").css({
          display:"none"
        });
        $(".userData-remove").css({
          display:"none"
        });
   }
   else if(type == "change"){
       $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");

        $(".userData-nameAvatar").css({
          display:"none"
        });
        $(".userData-dateTime").css({
          display:"none"
        });
        $(".userData-password").css({
          display:"block"
        });
        $(".userData-email").css({
          display:"none"
        });
        $(".userData-pGame").css({
          display:"none"
        });
        $(".userData-remove").css({
          display:"none"
        });
   }
   else if(type == "remove"){
       $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");
        
        $(".userData-remove").css({
          display:"block"
        });
        $(".userData-nameAvatar").css({
          display:"none"
        });
        $(".userData-dateTime").css({
          display:"none"
        });
        $(".userData-password").css({
          display:"none"
        });
        $(".userData-email").css({
          display:"none"
        });
        $(".userData-pGame").css({
          display:"none"
        });
   }
  });
});
 
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
  $(".submenu li:nth-child(2)").click(function(){
    $(".sidebar-list li a").removeClass("selected-sidebarList");
        $('.sidebar-list li a[data-sidebar="change"]').addClass('selected-sidebarList');

        $(".userData-nameAvatar").css({
          display:"none"
        });
        $(".userData-dateTime").css({
          display:"none"
        });
        $(".userData-password").css({
          display:"block"
        });
        $(".userData-email").css({
          display:"none"
        });
        $(".userData-pGame").css({
          display:"none"
        });
        $(".userData-remove").css({
          display:"none"
        });
  });
});