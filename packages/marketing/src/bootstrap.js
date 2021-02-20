import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// Mount function that starts up the app
const mount = (el) => {
  ReactDOM.render(<App />, el)
}
// If we are in development and in isolation -- call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}
// We are running through contianer so just export the mount function
export { mount }
