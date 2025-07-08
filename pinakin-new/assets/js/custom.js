new WOW().init();

$(document).on('click', '.offcanvas-header', function () {
    $('body').addClass('offcanvas-open'); // Add class to body
    $(this).addClass('open');             // Add 'open' class to the clicked header
});

$(document).on('click', '.offcanvas-header.open', function () {
    $('body').removeClass('offcanvas-open'); // Add class to body
    $(this).removeClass('open');             // Add 'open' class to the clicked header
});

//heroSectionSwiper
jQuery(document).ready(function($){

	let autoPlayDelay = 6000;

	let options = {
        //init: true,
        // Optional parameters
        loop: false,

        autoplay: {
        	delay: autoPlayDelay
        },
        effect: "fade",
        fadeEffect: { crossFade: true },
        virtualTranslate: true,
 /*   speed: 2000, 
 slidersPerView: 1,*/


        // If we need pagination
        pagination: {
        	el: '.swiper-pagination',
        	clickable: true,
            //type: 'progressbar'
        },

        // Navigation arrows
        navigation: {
        	nextEl: '.swiper-button-next',
        	prevEl: '.swiper-button-prev',
        },
    };
    
    let heroSectionSwiper = new Swiper ('.heroContainer .swiper-container', options);
    
    let slidersCount = heroSectionSwiper.params.loop ? heroSectionSwiper.slides.length - 2 : heroSectionSwiper.slides.length;
    let widthParts = 200 / slidersCount;
    
    $('.swiper-counter .total').html(slidersCount);
    for(let i=0; i<slidersCount; i++){
    	$('.swiper-progress-bar .progress-sections').append('<span></span>');
    }
    
    function initProgressBar(){
    	let calcProgress = (slidersCount-1) * (autoPlayDelay + heroSectionSwiper.params.speed);
    	calcProgress += autoPlayDelay;
    	$('.swiper-progress-bar .progress').animate({
    		width: '100%'
    	}, calcProgress, 'linear');
    }
    
    initProgressBar();
    
    heroSectionSwiper.on('slideChange', function () {
    	let progress = $('.swiper-progress-bar .progress');

    	$('.swiper-counter .current').html(this.activeIndex + 1);

    	if( 
    		( 
    			this.progress == -0 || (this.progress == 1 && this.params.loop) 
    			) && !progress.parent().is('.stopped')
    		){
    		progress.css('width', '0');
    	if(this.activeIndex == 0){
    		initProgressBar();
    	}
    }

    if(progress.parent().is('.stopped')){          
    	progress.animate({
    		'width': Math.round(widthParts * (this.activeIndex + 1)) + '%'
    	}, this.params.speed, 'linear');
    }
});
    
    heroSectionSwiper.on('touchMove', function () {
    	$('.swiper-progress-bar .progress').stop().parent().addClass('stopped');
    });
    
    
});

const productSliderSwiper = new Swiper(".productSlider .swiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 24,

    speed: 1000,
    autoplay: {
        delay: 3000,

    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1.2, // default for smallest screens
            spaceBetween: 5,
        },
        500: {
            slidesPerView: 1.5,
        },
        700: {
            slidesPerView: 3.3,
        },
        1000: {
            slidesPerView: 4,
        },
    },
});



/*Bottom icon Slider*/
var testimonailSliderswiper = new Swiper(".testimonailSlider .swiper", {
    spaceBetween: 50,
	loop: true,
    centeredSlides: true,
	slidesPerView: 2.5,
	 speed: 1000,
    autoplay: {
        delay: 3000,

    },

})



/**/

let scrollTarget = window.scrollY;
  let isScrolling = false;

  window.addEventListener('wheel', function (e) {
    e.preventDefault();

    scrollTarget += e.deltaY;

    // Clamp the scrollTarget within scrollable bounds
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    scrollTarget = Math.max(0, Math.min(scrollTarget, maxScroll));

    if (!isScrolling) {
      smoothScroll();
    }
  }, { passive: false });

  function smoothScroll() {
    isScrolling = true;

    const currentScroll = window.scrollY;
    const distance = scrollTarget - currentScroll;
    const scrollStep = distance * 0.15; // Smoother

    if (Math.abs(distance) > 0.5) {
      window.scrollBy(0, scrollStep);
      requestAnimationFrame(smoothScroll);
    } else {
      isScrolling = false;
    }
  }

  // Keep scrollTarget updated if user scrolls by other means (keyboard, touch)
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      scrollTarget = window.scrollY;
    }
  });