// scroolspy

$('body').scrollspy({ target: '#navbarSupportedContent' })

// preloader 

$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
}); 

// top arrow

$('.top_arrow').click(function(){
    $('html').animate({
        scrollTop: 0
    }, 1000);
});

$navOffset=$('#menubar').offset().top;
$(window).scroll(function(){
    $scrolling=$(this).scrollTop();
    if($scrolling > $navOffset){
       $('#menubar').addClass('navFixed');
    }else{
        $('#menubar').removeClass('navFixed');
    }
    
    if($scrolling > 500){
       $('.top_arrow').fadeIn();
    }
    else{
        $('.top_arrow').fadeOut();
    }
});

// smooth scrool

$('#menubar a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
          };
        });
      }
    }
  });

// banner

$('.slide').slick({
  dots: true,
    arrows: false,
  infinite: false,
    autoplay: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



var typed = new Typed(".t_slide1", {
  strings: ["Designer", "Developer", "Freelancer"],
  typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
});
var typed = new Typed(".t_slide2", {
  strings: ["Designer", "Developer", "Freelancer"],
  typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
});
var typed = new Typed(".t_slide3", {
  strings: ["Designer", "Developer", "Freelancer"],
  typeSpeed: 60,
    backSpeed: 60,
    smartBackspace: true,
    loop: true
});

// type ends

$(document).ready(function(){
    $('#bar1').barfiller({barColor: "#ff214f",duration: 2500});
    $('#bar2').barfiller({barColor: "#ff214f",duration: 4000});
    $('#bar3').barfiller({barColor: "#ff214f",duration: 3000});
});

// progress bar ends

  $('.venobox').venobox(); 

$(function () {
    // Filter
    var mixer = mixitup('.main_image');
    var mixer = mixitup(containerEl);
});

// Testimonials

$('.slide_tes').slick({
  dots: true,
    arrows: false,
  infinite: false,
    autoplay: true,
  speed: 900,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// news slide

$('.robin').slick({
  dots: false,
    arrows: false,
  infinite: false,
    autoplay: true,
  speed: 900,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// partner slide

$('.part_slide').slick({
  dots: false,
    arrows: false,
  infinite: false,
    autoplay: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

