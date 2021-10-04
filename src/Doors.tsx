import React, { useState } from 'react'
import './Doors.css'

export const Doors = ({ onStart, allIsLoaded }: { allIsLoaded: boolean, onStart: Function }) => {
  const [isStarted, setIsStarted] = useState(false)
  const [showAbout, setShowAbout] = useState(false)
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
            <button style={{ opacity: allIsLoaded ? '100%' : '0%' }} className="loading-btn btn--stripe btn">
              Start
            </button>

            <div className='right'></div>
          </div>
        </div>


      </div>
      {/*<div className="about" onClick={()=>{setShowAbout(true)}}>About</div>*/}
      <button className="welcome-btn  btn"
              style={{ display: showAbout ? 'block': undefined ,opacity: isStarted ? '0' : '100%', bottom: isStarted ? '20px' : '60px' }}>
        Hi, this is a small cozy game about unstable emotions and things that surround us.<br/><br/> It was designed to
        be played with sound turned on, moreover sound makes the gamplay whole. <br/> Please turn it on ❤️
        <br/><br/>
        <span className="ref">Developed for <a rel="noreferrer" target="_blank"
                                               href="https://ldjam.com/events/ludum-dare/49">ludum dare 49 game jam</a></span>
      </button>
    </>
  )
}