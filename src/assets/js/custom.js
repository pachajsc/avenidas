
window.addEventListener("scroll",function(e) {
   let header = document.getElementById("myHeader");
   let scrollPosition =
     window.pageYOffset ||
     document.documentElement.scrollTop ||
     document.body.scrollTop ||
     0;
   if (scrollPosition > 200) {
     header.classList.add("sticky");
   } else {
     header.classList.remove("sticky");
   }
}, true)



