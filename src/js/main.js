import { init as sliderInit } from './components/slider.js';
import { init as mobileInit } from './components/mobileMenu.js';
$(document).ready(function() {
  sliderInit();
  mobileInit();
});