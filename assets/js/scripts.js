


document.addEventListener("DOMContentLoaded", function() {

    // Coupon announcement
    document.querySelector(".zc_announce_close").addEventListener("click", function() {
        document.querySelector(".zc_coupon_announce").classList.add("off");
    });
});

// Best Selling Product
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


$(document).ready(function () {
    
    // Product Quentity
    if ($(".quantity").length > 0) {
            $(".ptPlus").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals).trigger('change');
            return false;
            });
            $(".ptMinus").on('click', function () {
            var vals = parseInt($(this).next(".carqty").val(), 10);
            if (vals > 1) {
                vals -= 1;
                $(this).next(".carqty").val(vals).trigger('change');
            } else {
                $(this).next(".carqty").val(vals).trigger('change');
            }
            return false;
            });
        }

    //  Feedback Slider
    var swiper = new Swiper(".zc_feedback_slider", {
        slidesPerView: 2,
        spaceBetween:30,
        loop: true,
        navigation: {
            nextEl: ".feedback-button-next",
            prevEl: ".feedback-button-prev",
        },
    });

    // Product Cart Slider
    const sliderThumbs = new Swiper('.slider_thumbs .swiper-container', { 
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 16,
        freeMode: true,
        breakpoints: { 
            0: { 
                direction: 'horizontal',
            },
            768: {
                direction: 'vertical',
            }
        }
    });
   
    const sliderImages = new Swiper('.slider_images .swiper-container', {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 32,
        mousewheel: true,
        grabCursor: true, 
        thumbs: { 
            swiper: sliderThumbs
        },
        breakpoints: {
            0: {
                direction: 'horizontal',
            },
            768: {
                direction: 'vertical', 
            }
        }
    });

    // Hover Toggle Class
    document.querySelectorAll('.collection_single').forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            element.classList.add('active');
            element.parentNode.querySelectorAll('.collection_single').forEach(function (sibling) {
                if (sibling !== element) {
                    sibling.classList.remove('active');
                }
            });
        });
    
        element.addEventListener('mouseleave', function () {
            element.classList.remove('active');
            document.querySelector('.active_item').classList.add('active');
        });
    });

});