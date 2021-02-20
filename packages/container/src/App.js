import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

// App level imports
import MarketingApp from './components/MarketingApp'

// Not sure how to fix the eslint error sadly
// Return our component
export default () => {
  return (
    <div>
      <h1>Main Component Loaded!</h1>
      <hr />
      <MarketingApp />
      <hr />
      <StylesProvider>
        <BrowserRouter>
          <Switch></Switch>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}
