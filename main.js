const hamburgerBtn = document.querySelector('.hamburger-button');
const primaryNav = document.querySelector('.primary-navigation');

hamburgerBtn.addEventListener('click', ()=> {
    console.log(hamburgerBtn.ariaExpanded);
    hamburgerBtn.ariaExpanded = hamburgerBtn.ariaExpanded !== 'true';
    primaryNav.classList.toggle('show');
  
})