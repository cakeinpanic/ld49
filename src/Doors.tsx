import React, { useState } from 'react'
import './Doors.css'

export const Doors = ({ onStart, allIsLoaded }: { allIsLoaded: boolean,onStart: Function }) => {
const [isStarted, setIsStarted] =useState(false)
  const start = () => {
    const root = document.body
    root?.style.setProperty('--anim', 'infinite')
    onStart()
    setIsStarted(true)
  }

  return (<>
    <div className="doors-container">
      <div className='door' onClick={start}>
        <div className='face'>
           <button style={{opacity: allIsLoaded ? '100%':'0%'}}className="loading-btn btn--stripe btn">
            Start
          </button>

          <div className='right'></div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
        <defs>
          <filter id="squiggly-0">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="0"/>
            <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
          <filter id="squiggly-1">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="1"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
          </filter>
          <filter id="squiggly-2">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="2"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="2"/>
          </filter>
          <filter id="squiggly-3">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="3"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="3"/>
          </filter>
          <filter id="squiggly-4">
            <feTurbulence id="turbulence" baseFrequency="0.01" numOctaves="3" result="noise" seed="4"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1"/>
          </filter>
        </defs>
      </svg>

    </div>
      <button className="welcome-btn  btn"  style={{opacity: isStarted ? '0':'100%', bottom: isStarted ? '20px': '60px'}}>
       Hi, this is a small cozy game about unstable emotions and things that surround us.<br/><br/>  It was designed to be played with sound turned on, moreover sound makes the gamplay whole. <br/> Please turn it on ❤️
        <br/><br/>
        <span className="ref">Developed for <a rel="noreferrer"  target="_blank" href="https://ldjam.com/events/ludum-dare/49">ludum dare 49 game jam</a></span>
      </button>
    </>
  )
}
