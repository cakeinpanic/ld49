import { useContext, useState } from 'react'
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

function getRandomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function changeColor(timeout: number) {
  const root = document.getElementById(LAMP_ID)

  setTimeout(() => {
    root?.style.setProperty('--brightness', getRandomBetween(70, 120) + '%')
    root?.style.setProperty('--hue', getRandomBetween(0, 180) + 'deg')
    root?.style.setProperty('--saturate', getRandomBetween(70, 120) + '%')
    changeColor(getRandomBetween(1000, 10000))
  }, timeout)
}

function blink() {
  const root = document.getElementById(LAMP_ID)

  root?.style.setProperty('--opacity', '0%')
  setTimeout(() => {
    root?.style.setProperty('--opacity', '100%')
    setTimeout(() => {
      blink()
    }, getRandomBetween(1000, 10000))
  }, getRandomBetween(100, 200))
}

export function Lamp() {
  changeColor(0)
  blink()

  const { score, lampState } = useContext(ScoreContext)

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
           style={{ opacity: lampState === eLampState.happy || lampState === eLampState.ok ? 1 : 0 }} src={light}
           onLoad={imgLoaded}/>
      <img className="img light"
           style={{ opacity: lampState === eLampState.neutral || lampState === eLampState.sad ? 1 : 0 }}
           src={mediumLight} onLoad={imgLoaded}/>
      <img className="img lamp" style={{ opacity: lampState !== eLampState.nightmare ? 1 : 0 }} src={lamp}
           onLoad={imgLoaded}/>

      <img className="img light" style={{ opacity: lampState === eLampState.nightmare ? 1 : 0 }} src={sadLight}
           onLoad={imgLoaded}/>
      <img className="img lamp" style={{ opacity: lampState === eLampState.nightmare ? 1 : 0 }} src={sadLamp}
           onLoad={imgLoaded}/>
    </div>
  )
}

