


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


$(document).ready(function(){

    //   Feedback Slider
    var swiper = new Swiper(".zc_feedback_slider", {
        slidesPerView: 2,
        spaceBetween:30,
        loop: true,
        navigation: {
            nextEl: ".feedback-button-next",
            prevEl: ".feedback-button-prev",
        },
    });


});