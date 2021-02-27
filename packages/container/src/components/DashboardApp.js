// Container for the Auth MFE
import React, { useRef, useEffect } from 'react'

// App level imports
import { mount } from 'dashboard/DashboardApp'

export default function DashboardApp() {
  // Get where to load in the App
  const ref = useRef(null)

  // Do something one time first time this is loaded
  useEffect(() => {
    mount(ref.current)
  }, []) // Only invoke this on first render

  return <div ref={ref} />
}
