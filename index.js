const multipleItemCarousel = document.querySelector('#carouselExample');

if(window.matchMedia("(min-width:992px)").matches){ //makes sure it works on the minimum width of 992 PIXELS

    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
      })
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();
    
    
    var scrollPosition = 0;
    
    $('.carousel-control-next').on('click', function(){//makes sure the previous button of the carousel works and moves the cards to the right
        if(scrollPosition < (carouselWidth - (cardWidth * 4))){ //checks if it has reached the end, if not, update
            console.log('next');
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
        }
    
    });
    
    $('.carousel-control-prev').on('click', function(){ //makes sure the previous button of the carousel works and moves the cards to the left
        if(scrollPosition > 0){//checks if it has reached the beginning, if not, update
            console.log('next');
            scrollPosition = scrollPosition - cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600);
        }
    
    });
}
else{
    $(multipleItemCarousel).addClass('slide');
}

