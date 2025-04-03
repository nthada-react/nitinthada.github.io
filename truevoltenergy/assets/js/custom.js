new WOW().init();

    $(document).ready(function() {
      $('.navbar-toggler').click(function() {
        $('.navbar').toggleClass('navbar-expanded');
      });
    });

//heroSectionSwiper
jQuery(document).ready(function($){

	let autoPlayDelay = 5000;

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
    let widthParts = 100 / slidersCount;
    
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

///////

const teamSwiper = new Swiper(".ourTeam .swiper", {
  // If loop true set photoswipe - counterEl: false
  loop: true,
  slidesPerView: 3.3,
  spaceBetween: 15,
  pagination: {
  	el: ".swiper-pagination",
  	clickable: true
  },
  // Navigation arrows
  navigation: {
  	nextEl: ".swiper-button-next",
  	prevEl: ".swiper-button-prev"
  }
});


 var swiper = new Swiper(".testimonailSlider .swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        1024: {
         slidesPerView: 2,
          spaceBetween: 15,
        },
      },
    });


  var swiper = new Swiper(".teamSlider .swiper", {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2.3,
          spaceBetween: 15,
        },
        1024: {
         slidesPerView: 2.6,
          spaceBetween: 40,
        },
      },
    });




$("[data-fancybox]").fancybox({
	beforeClose: function( instance, slide ) {
	}
});




/*Bottom icon Slider*/
document.addEventListener('DOMContentLoaded', function() {
  // Function to start counting
  function startCounting() {
    const animalsSaved = document.getElementById("animalsSaved");
    const animalsSterilized = document.getElementById("animalsSterilized");
    const animalsVaccinated = document.getElementById("animalsVaccinated");
    const animalsSurgeries = document.getElementById("animalsSurgeries");
    const animalsClinic = document.getElementById("animalsClinic");

    // Your target values
    const targets = {
      animalsSaved: 200,
      animalsSterilized: 500,
      animalsVaccinated: 300,
      animalsSurgeries: 100,
      animalsClinic: 400
    };

    // Function to animate count up
    function animateCountUp(element, targetValue) {
      let count = 0;
      const interval = setInterval(function() {
        if (count < targetValue) {
          count++;
          element.textContent = count + "+";
        } else {
          clearInterval(interval);
        }
      }, 10); // Adjust speed of counting
    }

    // Start animating each count
    animateCountUp(animalsSaved, targets.animalsSaved);
    animateCountUp(animalsSterilized, targets.animalsSterilized);
    animateCountUp(animalsVaccinated, targets.animalsVaccinated);
    animateCountUp(animalsSurgeries, targets.animalsSurgeries);
    animateCountUp(animalsClinic, targets.animalsClinic);
  }

  // Use IntersectionObserver to detect when the div comes into view
  const workFlexDiv = document.querySelector('.workFlex');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Start counting when the .workFlex div is in view
        startCounting();
        observer.disconnect(); // Stop observing after starting the count
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the div is visible
  });

  // Start observing the workFlex div
  observer.observe(workFlexDiv);
}, false);

