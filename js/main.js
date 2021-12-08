$(document) .ready(function() {
   /*Sidebar Menu*/
   "use strict";
   
   /*Preloader*/ 
   $(".preloader-wrap").delay(1500).fadeOut('slow');

   /*Navigation*/

  $('body').scrollspy({ target: '.navbar' })
   $(function() {
   $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  /*Swiper*/
   var swiper = new Swiper('.swiper', {
     autoplay: {
      delay: 4000,
    },
   });
  
  /*Magnific Popup*/
   $(function() {
    $('div.work').magnificPopup({delegate: 'a', 
      type: 'image',
      gallery: {
        enabled: false
      },
      removalDelay: 300,
      mainClass: 'mfp-fade'
    });
   });

   $(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true
    });
   });

   $(function() {
      $('.selector').animatedHeadline({
        animationType: 'rotate-2'
      });
   })

   var filterizd = $('.items').filterizr({ })
     
}); 
});

