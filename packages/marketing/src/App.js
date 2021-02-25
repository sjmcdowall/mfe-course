import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

// Generate a unique class name prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma-jss'
})

// Return our component
export default ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  )
}
