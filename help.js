 $(".help").click(function(){
  $(".help-page").css({
    display: "block"
  });
  $(".helpDialog-tabs li:first-child a").addClass("selected-tab");
});
$(".help-header .fa-times").click(function(){
   $(".help-page").css({
    display: "none"
   });
});