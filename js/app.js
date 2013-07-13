/* **********************************************
     Custom App JavaScripts
**********************************************///

 jQuery(function($){
    $('.bxslider').bxSlider({
        adaptiveHeight: true,
        mode: 'fade',
        captions: true
    });

    // Off Canvas
    $('body').addClass('js');

    var $menu = $('#side-menu'),
      $menulink = $('.side-menu-link'),
      $wrap = $('#wrap');

    $menulink.click(function() {
      $menulink.toggleClass('active');
      $wrap.toggleClass('active');
      return false;
    });
 });