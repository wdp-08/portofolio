  // humberger button
  const humberger = document.querySelector('#humberger');
  const navbarLink = document.querySelector('.navbar-link');
  humberger.addEventListener('click', function(){
      humberger.classList.toggle('humberger-active');
      navbarLink.classList.remove('hidden')
  })
  
  // navbar fixed
  window.addEventListener('scroll', function(){
      const header = document.querySelector('header');
      const fixedNav = header.offsetTop
      if(window.pageYOffset > fixedNav){
          header.classList.add('navbar-fixed');
      }else{
          header.classList.remove('navbar-fixed');
      }
  })