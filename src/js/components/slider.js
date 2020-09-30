export const init = () => {
  $(document).ready(function () {
    $('.blog__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 780,
        settings: {
          slidesToShow: 1
        }
      }]
    });
  });
};