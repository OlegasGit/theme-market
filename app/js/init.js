// init carousel
$('.main-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  prevArrow: false,
  nextArrow: false,
});

if(window.matchMedia('(max-width: 991px)').matches)
{
    $('.main-slider').slick({
      slidesToShow: 3,
      autoplay: false,
    });
}

// init Aleksander
$( function() {
	// Init tabs
    $( "#tabs" ).tabs();
    $( "#tabs-product" ).tabs();
  } );



$('.medium-card').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
    $('.all-items-container .card-img').removeClass('d-none');
    $('.all-items-container .row-card-img').removeClass('d-block');
});

$('.row-card').on('click', function(){
    // Find cards and add class row-card
    $('.all-items-container .card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
    $('.all-items-container .card-img').addClass('d-none');
    $('.all-items-container .row-card-img').addClass('d-block');
});

// init Inna
	