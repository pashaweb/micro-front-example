import "./style.css";
import { createTextElement } from './infra/helpers'

export interface Options {
  textJson: string
}


export default function createTextApp(root: HTMLElement, options: Options) {
  fetch(options.textJson).then((response) => response.json()).then((data) => {
    const textStr:string = data.text;
    const element = createTextElement(textStr);
    root.appendChild(element);
  });
}
//@ts-ignore
window.createTextApp = createTextApp;



