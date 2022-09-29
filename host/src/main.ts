
export interface App {
  appName: string
  appRootSelector: string
  appUrl: string
  appJs: string
  appCss: string
  appStarterFunction: string
  appOptions?: any
}


const appsConfig: App[] = [
  {
    appName: 'grid',
    appRootSelector: '#grid',
    appUrl: 'http://localhost:3001/',
    appJs: 'grid-0.0.0.js',
    appCss: 'grid-0.0.0.css',
    appStarterFunction: 'createGridApp',
    appOptions: {
      name: 'Vite + React + TS',
      url: 'https://jsonplaceholder.typicode.com/users'
    },
  },
  {
    appName: 'image',
    appRootSelector: '#image',
    appUrl: 'http://localhost:3002/',
    appJs: 'image-0.0.0.js',
    appCss: 'image-0.0.0.css',
    appStarterFunction: 'createImageApp',
    appOptions: {
      name: 'Madrid the best city in the world',
      url: 'https://a.cdn-hotels.com/gdcs/production196/d170/348659c0-9beb-11e8-a1b5-0242ac110053.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
    }
  },
  {
    appName: 'text',
    appRootSelector: '#text',
    appUrl: 'http://localhost:3003/',
    appJs: 'text-0.0.0.js',
    appCss: 'text-0.0.0.css',
    appStarterFunction: 'createTextApp',
    appOptions: {
        textJson:"text.json",
    },
  },
  {
    appName: 'list',
    appRootSelector: '#list',
    appUrl: 'http://localhost:3004/',
    appJs: 'list-0.0.0.js',
    appCss: 'list-0.0.0.css',
    appStarterFunction: 'createListApp',
    appOptions: {
      list: ["item1", "item2", "item3"],
    },
  }

]

const loadSubApp = (app: App) => {
  console.log('loadSubApp', app)
  const sc = document.createElement('script')
  sc.type = 'module'
  sc.src = app.appUrl + app.appJs;
  document.body.appendChild(sc);
  const css = document.createElement('link');
  css.href = app.appUrl + app.appCss;
  css.rel = 'stylesheet';
  document.head.appendChild(css);
  sc.onload = function() {
    // @ts-ignore
    window[app.appStarterFunction](document.querySelector(app.appRootSelector), app.appOptions);
  }.bind(app);
}
for (const app of appsConfig) {
  loadSubApp(app);
}
//@ts-ignore
window['listConfigObj'] = {
  target: document.getElementById('app'),
  list: [
    "item 1", "item 2", "item 3"
  ]

}

