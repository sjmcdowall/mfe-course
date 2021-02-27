import React from 'react'
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './App'

// Mount function that starts up the app
const mount = (
  el,
  { onAuthChange, onNavigate, defaultHistory, initialPath }
) => {
  // Create our route memory history and pass it along
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath]
    })

  // Setup callback on navigation if supplied
  if (onNavigate) {
    history.listen(onNavigate)
  }

  // Now render the app
  ReactDOM.render(<App onAuthChange={onAuthChange} history={history} />, el)

  // Return communication handles
  return {
    onParentNavigate({ pathname: nextPathname }) {
      console.log('Auth - My Parent just navigated to', nextPathname)

      // Push new path if different than current
      const { pathname } = history.location
      if (pathname !== nextPathname) {
        history.push(nextPathname)
      }
    }
  }
}
// If we are in development and in isolation -- call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root')

  if (devRoot) {
    console.log('Mounting Auth App')
    mount(devRoot, { defaultHistory: createBrowserHistory() })
  }
}
// We are running through contianer so just export the mount function
export { mount }
