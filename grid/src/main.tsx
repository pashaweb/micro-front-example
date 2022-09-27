import React from 'react'
import ReactDOM, { RootOptions } from 'react-dom/client'
import App, { AppProps } from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


export function createRootApp(container: Element, options: AppProps): void {
  console.log(options);
  //  const props: AppProps = 
  // //   name: 'React',
  // //   url: 'https://reactjs.org'
  // // }
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App {...options} />
    </React.StrictMode>
  )
}
// @ts-ignore
window.createRootApp = createRootApp



