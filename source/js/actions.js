(function($) {
  $(document).ready(function(){
     var scroll_start = 0;
     var startchange = $('#section-1');
     var offset = startchange.offset();
      if (startchange.length){
       $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
              $(".navbar").css('background-color', '#FCF9F2');
           } else {
              $('.navbar').css('background-color', 'transparent');
           }
       });
      }
  });
})( jQuery );