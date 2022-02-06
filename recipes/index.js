function scrollFunction() {
    let elmnt = document.getElementById("recipes");
    elmnt.scrollIntoView();
  }

  let headerM = document.getElementById('momoPara');
  let headerG = document.getElementById('gyozaPara');
  let headerD = document.getElementById('dumplingPara');
  

  function fadeOutOnScroll(element) {
    if (!element) {
      return;
    }
    
    let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
    let elementHeight = element.offsetHeight;
    let scrollTop = document.documentElement.scrollTop;
    
    let opacity = 1;
    
    if (scrollTop > distanceToTop) {
        opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
        element.style.opacity = opacity;
      }

    
    
  }
  
  function scrollHandler() {
    fadeOutOnScroll(headerM);
    fadeOutOnScroll(headerG);
    fadeOutOnScroll(headerD);
  }
  
  window.addEventListener('scroll', scrollHandler);