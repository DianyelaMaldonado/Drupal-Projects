document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
  slickSlider();
});

function slickSlider() {
  $('div.cardSlider').slick(
    {
      centerMode: true,
      centerPadding: '400px',
      slidesToShow: 1,
      prevArrow: $('.sliderButton.prev'),
      nextArrow: $('.sliderButton.next'),
      responsive: [
        {
          breakpoint: 1023,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
            
          }
        },
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            slidesToShow: 1,
          }
        }
      ]
    }
  );
}

