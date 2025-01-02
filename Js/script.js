$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  
  if(scrolling > 200){
      $('.navbar').addClass('sticky_name');
  }
  else {
       $('.navbar').removeClass('sticky_name');
  }
  });



jQuery(document).ready(function ($) {
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
});


new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

AOS.init({
  duration: 1200,
  delay: 150,
});

$('.sliderPart').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  prevArrow: '<i class="fa-solid fa-angles-left prev">',
  nextArrow: '<i class="fa-solid fa-angles-right next">',
  dots: true,
  
});



