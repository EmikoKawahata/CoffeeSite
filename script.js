 const smoothTrigger = document.querySelectorAll('a.header_link[href^="#"]');
  for (let i = 0; i < smoothTrigger.length; i++) {
  smoothTrigger[i].addEventListener('click',(e)=>{
      e.preventDefault();
      let href=
      smoothTrigger[i].getAttribute('href');
      let targetElement =
      document.getElementById(href.replace('#',''));
      const rect =
      targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const target =rect + offset;
      window.scrollTo({
          top:target,
          behavior:'smooth'
      });
  });
  }  
