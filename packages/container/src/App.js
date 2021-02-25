import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles'

// App level imports
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'

// Generate a unique class name prefix
const generateClassName = createGenerateClassName({
  productionPrefix: 'ct-jss'
})

// Not sure how to fix the eslint error sadly
// Return our component

export default function App() {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <Header />
            <MarketingApp />
          </div>
        </BrowserRouter>
      </StylesProvider>
    </div>
  )
}
