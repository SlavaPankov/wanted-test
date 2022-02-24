import { createFromTemplate } from "./createFromTamplates";

export function RenderSlide(descr, name, info) {
  const template = `
    <div class="swiper-slide top__swiper-slide">
      <div class="top__descr">
        ${descr}
      </div>
      <div class="top__subscr">
        ${name}, <span class="top__info">${info}</span>
      </div>
    </div>
  `;

  const slide = createFromTemplate(template);

  return slide;
}
