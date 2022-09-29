export function createTextElement(html: string) {
  const element = document.createElement('div');
    element.innerHTML = decodeURIComponent(html) ;
    return element;
}