// Container for the Auth MFE
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

// App level imports
import { mount } from 'auth/AuthApp'

export default function AuthApp({ onSignIn }) {
  // Get where to load in the App
  const ref = useRef(null)
  const history = useHistory()

  // Do something one time first time this is loaded
  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        console.log('Container noticed navigation in Auth to ', nextPathname)
        // Push new path if different than current
        const { pathname } = history.location
        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onAuthChange: () => {
        onSignIn()
      }
    })

    // Setup navigation listener
    history.listen(onParentNavigate)
  }, []) // Only invoke this on first render

  return <div ref={ref} />
}
