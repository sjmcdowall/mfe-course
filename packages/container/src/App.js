import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

// App level imports
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'

// Not sure how to fix the eslint error sadly
// Return our component
export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </BrowserRouter>
  )
}
