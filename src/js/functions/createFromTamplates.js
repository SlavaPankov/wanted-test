export function createFromTemplate(template) {
  const element = document.createElement('template');
  element.innerHTML = template.trim();
  return element.content.firstChild;
}
