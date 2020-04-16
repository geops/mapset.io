import React, { useState } from 'react'
import Cookies from 'js-cookie'

import '../css/tracker.css'

export default function TrackingDialog () {
  
  
  const [tracker, setTracker] = useState(Cookies.get('tracker'))
    
  function acceptTracking () {
    Cookies.set('tracker', true)
    setTracker(Cookies.get('tracker'))
    console.log(tracker)
  }

  return (
    !tracker || tracker === undefined ?
    <div className="tracking-wrapper">
      <div className="tracking-window">
        <section className="text">
          Diese Website nutzt Cookies, um bestmögliche Funktionalität bieten zu können.
        </section>
        <section className="actions">
          <button>Mehr Infos</button>
          <button onClick={acceptTracking}>Akzeptieren</button>
        </section>
      </div>
    </div>
    : ''
  )  
}
