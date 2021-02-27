import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'

// Import local components
import Signin from './components/Signin'
import Signup from './components/Signup'

// Generate a unique class name prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'auth-jss'
})

// Return our component
export default ({ onAuthChange, history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route path="/auth/signin">
              <Signin onAuthChange={onAuthChange} />
            </Route>
            <Route path="/auth/signup">
              <Signup onAuthChange={onAuthChange} />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
