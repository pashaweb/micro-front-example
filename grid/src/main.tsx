import React from 'react'
import ReactDOM, { RootOptions } from 'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )


export function createRootApp(container: Element, options?: RootOptions): void {

  ReactDOM.createRoot(container, options).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
// @ts-ignore
window.createRootApp = createRootApp


  
