import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import lamp from './assets/lamp.png'
import light from './assets/light.png'
import mediumLight from './assets/medium_light.png'
import sadLamp from './assets/sad_lamp.png'
import sadLight from './assets/sad_light.png'
import { LoadedContext } from './context/loaded.context'
import { ScoreContext } from './context/score.context'
import './Lamp.css'
import { eLampState } from './lampState.enum'

const LAMP_ID = 'lamp'

function getRandomBetween([min, max]: number[]) {
  const random = Math.random() * (max - min) + min
  console.log(random, min, max)
  return random
}

function setBgColor(lampState: eLampState) {
  const root = document.body

  switch (lampState) {
    case eLampState.happy:
    case eLampState.ok:
    case eLampState.neutral:
      root?.style.setProperty('--bg', '#3d3d46')
      break
    case eLampState.sad:
      root?.style.setProperty('--bg', '#1d1d26')
      break
    case eLampState.nightmare:
      root?.style.setProperty('--bg', '#1a1a1d')
  }

}

export function Lamp() {
  const { lampState } = useContext(ScoreContext)

  const timeoutRef = useRef<any>()
  const blinkTimeoutRef = useRef<any>()

  const blink = useCallback(() => {
    const root = document.body
    let withoutLight = [100, 200]
    let nextBlink = [1000, 2000]
    switch (lampState) {
      case eLampState.nightmare:
        withoutLight = [100, 1500]
        nextBlink = [100, 500]
        break
      case eLampState.sad:
        withoutLight = [200, 500]
        nextBlink = [1000, 4000]
        break
      case eLampState.neutral:
        withoutLight = [100, 200]
        nextBlink = [5000, 8000]
        break
    }

    clearTimeout(blinkTimeoutRef.current)
    if (lampState === eLampState.nightmare || lampState === eLampState.sad || lampState === eLampState.neutral) {
      root?.style.setProperty('--opacity-filter', '0%')
    }
    setTimeout(() => {
      root?.style.setProperty('--opacity-filter', '100%')
      blinkTimeoutRef.current = setTimeout(() => {
        blink()
      }, getRandomBetween(nextBlink))
    }, getRandomBetween(withoutLight))
  }, [lampState])

  const changeColor = useCallback(() => {
    clearTimeout(timeoutRef.current)
    const root = document.getElementById(LAMP_ID)

    if (lampState === eLampState.ok || lampState === eLampState.happy || lampState === eLampState.neutral) {
      root?.style.setProperty('--brightness', getRandomBetween([70, 120]) + '%')
      root?.style.setProperty('--hue', getRandomBetween([0, 180]) + 'deg')
      root?.style.setProperty('--saturate', getRandomBetween([70, 120]) + '%')
    } else {

      root?.style.setProperty('--hue', 0 + 'deg')
      root?.style.setProperty('--saturate', 30 + '%')
    }
    let nextChange = [1000, 1000]

    switch (lampState) {
      case eLampState.happy:
        nextChange = [500, 1000]
        break
      case eLampState.ok:
        nextChange = [2000, 5000]
        break
      case eLampState.neutral:
        nextChange = [2000, 5000]
        break
    }

    timeoutRef.current = setTimeout(changeColor, getRandomBetween(nextChange))
  }, [lampState])

  useEffect(() => {
    changeColor()
    blink()
    setBgColor(lampState)
  }, [lampState, changeColor, blink])

  const { imagesAreLoaded } = useContext(LoadedContext)
  const [loadedCount, setLoadedCount] = useState(0)

  const imgLoaded = () => {
    setLoadedCount(loadedCount + 1)

    if (loadedCount === 4) {
      imagesAreLoaded && imagesAreLoaded(true)
    }
  }

  return (
    <div id={LAMP_ID}>
      <img className="img light"
           style={{ opacity: lampState === eLampState.happy || lampState === eLampState.ok ? undefined : 0 }}
           src={light}
           onLoad={imgLoaded}/>
      <img className="img light"
           style={{ opacity: lampState === eLampState.neutral || lampState === eLampState.sad ? undefined : 0 }}
           src={mediumLight} onLoad={imgLoaded}/>
      <img className="img lamp" style={{ opacity: lampState !== eLampState.nightmare ? 1 : 0 }} src={lamp}
           onLoad={imgLoaded}/>

      <img className="img light" style={{ opacity: lampState === eLampState.nightmare ? undefined : 0 }} src={sadLight}
           onLoad={imgLoaded}/>
      <img className="img lamp" style={{ opacity: lampState === eLampState.nightmare ? 1 : 0 }} src={sadLamp}
           onLoad={imgLoaded}/>
    </div>
  )
}

