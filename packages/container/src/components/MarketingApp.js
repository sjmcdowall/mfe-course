// Container for the Marketing MFE
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// App level imports
import { mount } from 'marketing/MarketingApp'

export default function MarketingApp() {
  // Get where to load in the App
  const ref = useRef(null)
  const history = useHistory()

  // Do something one time first time this is loaded
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        console.log(
          'Container noticed navigation in Marketing to ',
          nextPathname
        )
        // Push new path if different than current
        const { pathname } = history.location
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      }
    })

    // Setup navigation listener
    history.listen(onParentNavigate)
  }, []) // Only invoke this on first render

  return <div ref={ref} />
}
