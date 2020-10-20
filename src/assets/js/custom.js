

window.addEventListener("scroll",function(e) {
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

// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.animate__animated'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('animate__fadeInUp');
      } else {
        element.classList.remove('animate__fadeInUp');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
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



}, true)

