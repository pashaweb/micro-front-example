import { genearateHtmlTag } from './infra/helpers'
import './style.css'

export interface Options{
    name: string
    url: string

}

export default function createImageApp(root: HTMLElement, options: any) {
  const img = genearateHtmlTag('IMG', ['image'],[{alt: options.name, src: options.url}])
  root.appendChild(img);

}
//@ts-ignore
window.createImageApp = createImageApp;
