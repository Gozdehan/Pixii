$(document).ready(function(){

  $(".sidebar-list li a").click(function(){
	var type = $(this).attr("data-sidebar");
	console.log(type);

  $(".sidebar-list li a").removeClass("selected-sidebarList");
  $(this).addClass("selected-sidebarList");

  $('.userData').not('.userData-' + type).hide();
  $('.userData-' + type).show();
  });
});

if("#change-password" == document.location.hash){
  $('.userData').not('.userData-password').hide();
  $('.userData-password').show();
  $(".sidebar-list li a").removeClass("selected-sidebarList");
  $(".sidebar-list li:nth-child(6) a").addClass("selected-sidebarList");
}
 
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
        $('.sidebar-list li a[data-sidebar="password"]').addClass('selected-sidebarList');

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