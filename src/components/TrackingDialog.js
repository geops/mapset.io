import React, { useState } from 'react'
import Cookies from 'js-cookie'

import '../sass/tracker.sass'

export default function TrackingDialog () {
  
  const [tracking, setTracking] = useState(Cookies.get('tracking'))
  
  function acceptTracking () {
    Cookies.set('tracking', true)
    setTracking(Cookies.get('tracking'))
  }

  return (
    !tracking || tracking === undefined ?
    <div className="tracking-wrapper">
      <div className="tracking-window">
        <section className="text">
        This website uses cookies to ensure you get the best experience on our website.
        </section>
        <section className="actions">
          <button onClick={() => { window.location = 'https://geops.ch/node/182?language=en'}}>more information</button>
          <button onClick={acceptTracking}>accept</button>
        </section>
      </div>
    </div>
    : ''
  )  
}
