$(document).ready(function(){
  $('.sidebar-list li a[data-sidebar="avatar"]').addClass('selected-sidebarList');

  $(".sidebar-list li a").click(function(){
	var type = $(this).attr("data-sidebar");
	console.log(type);
    
  if(type = "avatar"){
    $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");
  }
    else if(type = "date"){
      $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");

        $(".userData-nameAvatar").css({
        	display:"none"
        });
        $("userData-dateTime").css({
        	display:"block"
        });
   }
   else if(type = "email"){
      $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");
   }
   else if(type = "game"){
     $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");
   }
   else if(type = "change"){
       $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");
   }
   else if(type = "remove"){
       $(".sidebar-list li a").removeClass("selected-sidebarList");
        $(this).addClass("selected-sidebarList");
   }
  });
});
