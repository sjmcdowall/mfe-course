import React, { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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

// Generate a unique class name prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'ct-jss'
})

// Not sure how to fix the eslint error sadly
// Return our component

export default function App() {
  // Set up our state mechanism
  const [isSignedIn, setIsSignedIn] = useState(false)

  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <Header
              isSignedIn={isSignedIn}
              onSignOut={() => setIsSignedIn(false)}
            />
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route path="/auth">
                  <LazyAuthApp onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/">
                  <LazyMarketingApp />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}
