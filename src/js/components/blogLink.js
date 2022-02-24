import { renderBlogLink } from "../functions/renderBlogLink";
import { getBlogData } from "../functions/getBlogData";

const data = getBlogData();
const container = document?.querySelector('.link-list');
const btn = document?.querySelector('.bottom__btn');

btn.addEventListener('click', () => {
  data.then(item => {
    item.sort(function(a, b) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return dateB - dateA;
    }).forEach(elem => {
      const blogLink = renderBlogLink(elem.url, elem.title);
      container.append(blogLink);
    });
  });
  btn.remove();
});
