/*

My Custom JS
============

Author    : Vishal R  (http://www.vishalranjan.in)
Designeer : Sankalp S (http://wwww.sankalpsinha.com)
Updated   : May 2015

*/

var $sidenav = $('.sidenav');
var $navbar = $('.navbar');


$(document).scroll(function() {
    $sidenav.css({display: $(this).scrollTop()>220 ? "block":"none"});
    //$navbar.css({height: $(this).scrollTop()>200 ? "40px":"80px"});
    
    if ($('body').height() -125 <= ($(window).height() + $(window).scrollTop())) {
           $('.sidenav').hide();
       }
    
    
    
});    