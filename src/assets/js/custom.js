$(document).ready(function(){
  $('.thumbnail-seccion-container__action-buttons').click(function(){
    $('.nav-content').addClass('stickyNav')
  })
})


function onInit() {
  //scroll smooth
  const links = document.querySelectorAll(".scroll-smooth");

  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }

  function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
    });
  }
  //scroll smooth


  //scroll position conditional
  window.addEventListener("scroll", function (e) {

    let header = document.getElementById("myHeader");
    let arrow = document.getElementById("arrow");
    let scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollPosition > 1200) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");

    }
    if (scrollPosition > 200) {
      arrow.classList.add("arrow-active");
    } else {
      arrow.classList.remove("arrow-active");
    }
    // if (scrollPosition < 1200) {
    //   btns.classList.remove("menuActive");
    // }

    if (scrollPosition < 1300) { $('.scroll-smooth').removeClass('active') }
    //scroll position conditional


    // Animate section
    var scroll = window.requestAnimationFrame ||
      function (callback) { window.setTimeout(callback, 1000 / 60) };
    var elementsToShow = document.querySelectorAll('.animate__animated');
    var menuItemsToShow = document.querySelectorAll('.thumbnail-seccion-container');

    function loop() {
      Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('animate__');
        } else {
          element.classList.remove('animate__');
        }
      });
      Array.prototype.forEach.call(menuItemsToShow, function (pp) {
        if (isElementInViewport(pp)) {
          pp.classList.add('active');
        } else {
          pp.classList.remove('active');
        }
      });


      scroll(loop);
    }
    loop();

    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }
    // Animate section
    var scrollDistance = $(window).scrollTop();

    $('.thumbnail-seccion-container__action-buttons').click(function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.thumbnail-seccion-container').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.nav-content a.lk.active').removeClass('active');
        $('.nav-content a.lk').eq(i).addClass('active');
      }
    });

  }, true)

}




