 jQuery(function($){
    // Loading Banner Background Images with animation Events
    $('.banner-container').imageloader(
      {
        background: true,
        callback: function (elm) {
          $( '#loaderImage' ).fadeOut();
          $(elm).delay(600).fadeIn(400);
        }
      }
    );

    // Fit Banner Title
    $("#firstTitle").fitText(1, { minFontSize: '68px', maxFontSize: '90px' });
    $("#secondTitle").fitText(1, { minFontSize: '18px', maxFontSize: '18px' });
    $(".invite-header").fitText(1, { minFontSize: '31px', maxFontSize: '48px' });
    $(".what-title span.second-line").fitText(1, { minFontSize: '48px', maxFontSize: '60px' });

    // Email Submit ( Using Mailchimp Email Client )
    $('#signup').submit(function() {
    // update user interface
    $('.checking-container').addClass( "animated fadeInDown" );

    // Prepare query string and send AJAX request
    $.ajax({
        url: 'inc/store-address.php',
        data: 'ajax=true&email=' + escape($('#email').val()),
        success: function(msg) {
          if ( msg == '<h4>Great! Keep an eye on your inbox! An invitation email will soon be there!</h4>' ){
            $( '.email-inline' ).addClass( "animated fadeOutUp" );
            $(' .notify-container ').css({
              'margin-top': '-3.5em'
            });
            $( '.social-container' ).removeClass( "fade" );
            $( '.social-container' ).delay(2000).addClass( "animated bounceIn" );
            $( '.social-container' ).removeClass( "animated bounceIn" ).css({
              'opacity': '1'
            });
          }
          $('.checking-container').addClass( "animated fadeOutDown" );
          $('#response').html(msg);
          $(' .notify-container ').addClass( "animated fadeInUp" );
        }
      });

      return false;
    });
  // Email Submit End



    // Animate Different Section Elements with Animate CSS on Scroll
    $( '.main-section' ).waypoint( function(){
        $(' #whatSection ').addClass("animated fadeIn");
        $(' .tags-list ').delay(100).addClass("animated fadeInRight");
      }, { offset:600 }
    );
 });