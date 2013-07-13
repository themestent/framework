/* **********************************************
     Custom App JavaScripts
**********************************************///
jQuery(function(e){e(".bxslider").bxSlider({adaptiveHeight:!0,mode:"fade",captions:!0});e("body").addClass("js");var t=e("#side-menu"),n=e(".side-menu-link"),r=e("#wrap");n.click(function(){n.toggleClass("active");r.toggleClass("active");return!1})});