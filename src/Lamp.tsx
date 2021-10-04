import React, { useContext, useEffect, useState } from 'react'
import lamp from './assets/lamp.png'
import light from './assets/light.png'
import mediumLight from './assets/medium_light.png'
import sadLamp from './assets/sad_lamp.png'
import sadLight from './assets/sad_light.png'
import { LoadedContext } from './context/loaded.context'
import { ScoreContext } from './context/score.context'
import { useBgColor } from './hooks/bgColor.hook'
import { LAMP_ID } from './hooks/hook.utils'
import { useLightBlink } from './hooks/lightBlink.hook'
import { useLightTransitions } from './hooks/lightTransitions.hook'
import './Lamp.css'
import { eLampState } from './lampState.enum'
import { Speech } from './Speech'

export function Lamp({showControls}: {showControls:boolean}) {
  const { lampState } = useContext(ScoreContext)

  useLightTransitions(lampState)
  useLightBlink(lampState)
  useBgColor(lampState)

  const { imagesAreLoaded } = useContext(LoadedContext)
  const [loadedCount, setLoadedCount] = useState(0)

  const imgLoaded = () => {
    setLoadedCount(loadedCount + 1)
  }

  useEffect(() => {
    if (loadedCount === 2 * 5) {
      imagesAreLoaded && imagesAreLoaded(true)
    }
  }, [loadedCount, imagesAreLoaded])

  const getLampImage = (lampStateToRender: eLampState) => {
    let opacity
    let lampImg
    let lightImg
    opacity = (lampState === lampStateToRender) ? 1 : 0
    switch (lampStateToRender) {
      case eLampState.nightmare:

        lampImg = sadLamp
        lightImg = sadLight
        break
      case eLampState.sad:
      case eLampState.neutral:
        lampImg = lamp
        lightImg = mediumLight
        break
      case eLampState.ok:
      case eLampState.happy:
        lightImg = light
        lampImg = lamp
        break
    }
    return (
      <div style={{ opacity }} key={lampStateToRender} className="lamp-container">
        <img className="img light" src={lightImg} onLoad={imgLoaded}/>
        <img className="img lamp" src={lampImg} onLoad={imgLoaded}/>
      </div>
    )
  }

  return (
    <div id={LAMP_ID}>
      {[eLampState.nightmare, eLampState.sad, eLampState.neutral, eLampState.ok, eLampState.happy].map(
        state => getLampImage(state))}
      {showControls && <Speech/>}
    </div>

  )
}

