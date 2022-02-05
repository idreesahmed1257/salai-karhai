// JavaScript Document
$(document).ready(function () {
     $(".autooWidth").lightSlider({
          autoWidth: true,
          loop: true,
          onSliderLoad: function () {
               $(".autooWidth").removeClass("cs-hidden");
          },
     });
});
