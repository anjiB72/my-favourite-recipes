$(function(){

  //Toggle drop down menu when hamburger icon clicked
  $('.container').on('click' , function(e){
    e.preventDefault();
    $('.dropdown-menu').slideToggle();
  });

  //Hide menu when menu item clicked
  $('.dropdown-menu a').on('click', function(){
    $('.dropdown-menu').hide();
  });


});
