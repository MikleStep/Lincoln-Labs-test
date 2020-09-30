export const init = () => {
  var hamburgerMenu = document.getElementById('hamburger-menu-button');
  var rects = hamburgerMenu.getElementsByTagName('rect');
  var mobileMenu = document.getElementById('mobile-menu');

  hamburgerMenu.addEventListener('click', menuClickHandler);

  var mobileMenuLinks = document.getElementsByClassName('mobile-menu')[0].getElementsByTagName('a');

  for (var i = 0; i < mobileMenuLinks.length; i++) {
    mobileMenuLinks[i].addEventListener('click', menuClickHandler);
  }

  function menuClickHandler() {
    if (hamburgerMenu.classList == 'clicked') {
      hamburgerMenu.classList.remove('clicked');
      rects[0].setAttribute('x', '0'); // Edge
      rects[0].setAttribute('y', '0'); // Edge
      rects[2].setAttribute('x', '0'); // Edge
      rects[2].setAttribute('y', '20'); // Edge
      hideMenu();
    } else {
      hamburgerMenu.classList.add('clicked');
      rects[0].setAttribute('x', '4'); // Edge
      rects[0].setAttribute('y', '-1'); // Edge
      rects[2].setAttribute('x', '-13'); // Edge
      rects[2].setAttribute('y', '16'); // Edge
      showMenu();
    }
  }

  function hideMenu() {
    mobileMenu.classList.add('hidden');
  }
  function showMenu() {
    mobileMenu.classList.remove('hidden');
  }
  function menuClickHandler() {
    if (hamburgerMenu.classList == 'clicked') {
      hamburgerMenu.classList.remove('clicked');
      rects[0].setAttribute('x', '0'); // Edge
      rects[0].setAttribute('y', '0'); // Edge
      rects[2].setAttribute('x', '0'); // Edge
      rects[2].setAttribute('y', '20'); // Edge
      hideMenu();
    } else {
      hamburgerMenu.classList.add('clicked');
      rects[0].setAttribute('x', '4'); // Edge
      rects[0].setAttribute('y', '-1'); // Edge
      rects[2].setAttribute('x', '-13'); // Edge
      rects[2].setAttribute('y', '16'); // Edge
      showMenu();
    }
  }

  function hideMenu() {
    mobileMenu.classList.add('hidden');
  }
};