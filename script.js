
var pan=0

function panfunct(x){
  pan=x
  console.log(pan)
}

$(document).ready(function(){
  var $carousel = $('.carousel');
  
  $carousel.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev' style='margin-right:10%'><</button>",
    nextArrow:"<button type='button' class='slick-next'>></button>",
    infinite: false
  });

  $carousel.on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(".slick-next").prop('disabled', false);
    $(".slick-prev").prop('disabled', false);

    if(currentSlide === 0) {
      $(".slick-prev").prop('disabled', true);
    } else if (currentSlide === 1 & pan==0) {
      $(".slick-next").prop('disabled', true);
    }
  });
});
