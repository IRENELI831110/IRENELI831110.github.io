$(function () {
  $("#goTop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#goTop").fadeIn(200);
    } else {
      $("#goTop").stop().fadeOut(200);
    }
  });

  // owl-carousel
  $(".owl-carousel").owlCarousel({
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    items: 1,
    nav: true,
    dots: true,
    // responsiveClass: true,
    loop: true,
    smartSpeed: 450,
    autoplay: false,
    autoplayTimeout: 5000,
    touchDrag: true,
  });

  //aos
  AOS.init({
    once: true,
    easing: "ease-in-sine",
    duration: "600",
    anchorPlacement: "top",
  });
});

//tab
function workTab(event, work) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabContent" and hide them
  tabcontent = document.getElementsByClassName("tabContent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Get all elements with class="tab" and remove the class "active"
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(work).classList.add("active");
  event.currentTarget.classList.add("active");
}
