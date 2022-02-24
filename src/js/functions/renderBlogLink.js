import { createFromTemplate } from "./createFromTamplates";

export function renderBlogLink(url, text) {
  const template = `
    <li class="link-list__item">
      <a class="link-list__link" target="_blank" href="${url}">
        <picture class="link-list__picture">
          <source srcset="../img/desktop/img1.webp" type="image/webp">
          <img loading="lazy" src="../img/desktop/img1.png" class="link-list__image" alt="изображение">
        </picture>
        <div class="link__text">
          ${text}
        </div>
      </a>
    </li>
  `;

  const link = createFromTemplate(template);

  return link
}
