import React from 'react'
import ReactDOM, { RootOptions } from 'react-dom/client'
import App, { AppProps } from './App'
import './index.css'



export default function createRootApp(container: Element, options: AppProps): void {
  console.log('createRootApp')

  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App {...options} />
    </React.StrictMode>
  )
}
// @ts-ignore
window.createGridApp = createRootApp



