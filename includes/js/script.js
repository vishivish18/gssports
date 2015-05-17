/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

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