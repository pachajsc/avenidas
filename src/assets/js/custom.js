
// function header stiky
window.scrollBy(100, 100);
window.addEventListener("scroll", (e) => {
  
  if (window.pageYOffset > 200) {
    alert('test')
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}, true)

  var header = document.getElementById("myHeader");
 

// function header stiky
