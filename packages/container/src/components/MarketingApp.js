// Container for the Marketing MFE
import React, { useRef, useEffect } from 'react'

// App level imports
import { mount } from 'marketing/MarketingApp'

export default () => {
  // Get where to load in the App
  const ref = useRef(null)

  // Do something one time first time this is loaded
  useEffect(() => {
    mount(ref.current)
  })

  return <div ref={ref} />
}
