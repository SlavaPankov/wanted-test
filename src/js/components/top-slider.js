import Swiper, { Navigation } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

Swiper.use([Navigation]);

const slider = new Swiper('.top__swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  slidesPerGroup: 1,

  navigation: {
    nextEl: '.swiper-navigation__next',
    prevEl: '.swiper-navigation__prev',
  },
})

