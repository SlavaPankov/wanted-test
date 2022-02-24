import { RenderSlide } from "../functions/renderSlide";
import { getFeedbackData } from "../functions/getFeedbackData";

const data = getFeedbackData();
const container = document?.querySelector('.swiper-wrapper');
const text = '“I registered on the AidaForm website, having stumbled upon one of the form templates, which I really liked. My first form, which is still active by the way, was published 20 minutes after I found the AidaForm website and created an account!';
const name = 'Ben Johnson';
const info = ',web-store owner'

data.then(item => {
  item.forEach(elem => {
    const slide = RenderSlide(elem.text, elem.name, elem.instagram_username);
    container.append(slide);
  });
},
(error) => {
  const slide = RenderSlide(text, name, info);
  container.append(slide);
});
