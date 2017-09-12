
$('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});
$('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});


$(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 200)
    {
    $(".rayo").fadeOut();
    }
    else
    {
    $(".rayo").fadeIn();
    }
  });
});


$(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() > 500)
    {
    $(".rayoDerecho").fadeIn();
    }
    else
    {
    $(".rayoDerecho").fadeOut();
    }
  });
});



$('.panelDos').hover(
  function() {
    $('.imagenDos').collapse('show');
  },
  function() {
    $('#centro2, #satellite2, #satellitedos2').show();
  }  
);


$('.panelTres').hover(
  function() {
    $('.imagenTres').collapse('show');
  },
  function() {
    $('#centro2, #satellite2, #satellitedos2').show();
  }  
);


$('.panelCuatro').hover(
  function() {
    $('.imagenCuatro').collapse('show');
  },
  function() {
    $('#centro2, #satellite2, #satellitedos2').show();
  }  
);


$('.panelCinco').hover(
  function() {
    $('.imagenCinco').collapse('show');
  },
  function() {
    $('#centro2, #satellite2, #satellitedos2').show();
  }  
);

$('.panelSeis').hover(
  function() {
    $('.imagenSeis').collapse('show');
  },
  function() {
    $('#centro2, #satellite2, #satellitedos2').show();
  }  
);

$('.panelSiete').hover(
  function() {
    $('.imagenSiete').collapse('show');
  },
  function() {
    $('#centro2, #satellite2, #satellitedos2').show();
  }  
);



$(function () {
    var count = 0;
    $('.owl-carousel').each(function () {
        $(this).attr('id', 'owl-demo' + count);
        $('#owl-demo' + count).owlCarousel({
            // navigation: true,
            slideSpeed: 1000,
            pagination: true,
            singleItem: true,
            autoPlay: 5000,
            autoHeight: true
        });
        count++;
    });
});

  


