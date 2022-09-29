import './app.css'
import List from './List.svelte'
export interface listConfig {
  target: HTMLElement
  data: Array<any>
}
// if(window['listConfigObj']){
//   new List({
//     target: window['listConfigObj'].target,
//     props: {
//       list: window['listConfigObj'].list
//     }
//   })
// }




export  function createListApp(target: HTMLElement, props: { list: string[] }) {
  const app = new List({
    target,
    props
  })
}
export  default createListApp;
//@ts-ignore
window.createListApp = createListApp;
