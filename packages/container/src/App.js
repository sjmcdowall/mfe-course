import React, { lazy, Suspense, useState, useEffect } from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'

// App level imports
import Header from './components/Header'
import Progress from './components/Progress'

// Lazy load the MFE components
const LazyMarketingApp = lazy(() => import('./components/MarketingApp'))
const LazyAuthApp = lazy(() => import('./components/AuthApp'))
const LazyDashboardApp = lazy(() => import('./components/DashboardApp'))

// Generate a unique class name prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'ct-jss'
})

// Create our browser history..
const history = createBrowserHistory()

// Return our component

export default function App() {
  // Set up our state mechanism
  const [isSignedIn, setIsSignedIn] = useState(false)

  // If our signed in state changes .. redirect to somewhere
  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard')
    }
  }, [isSignedIn])

  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <div>
            <Header
              isSignedIn={isSignedIn}
              onSignOut={() => setIsSignedIn(false)}
            />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/dashboard">
                  {!isSignedIn && <Redirect to="/" />}
                  <LazyDashboardApp />
                </Route>
                <Route path="/auth">
                  <LazyAuthApp onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/">
                  <LazyMarketingApp />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </StylesProvider>
      </Router>
    </div>
  )
}
