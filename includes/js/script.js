/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/

var $sidenav = $('.sidenav');
$(document).scroll(function() {
    $sidenav.css({display: $(this).scrollTop()>200 ? "block":"none"});
    if ($('body').height() -100 <= ($(window).height() + $(window).scrollTop())) {
           $('.sidenav').hide();
       }
});    