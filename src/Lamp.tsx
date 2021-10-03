import { useContext, useEffect, useState } from 'react'
import lamp from './assets/lamp.png'
import sadLamp from './assets/sad_lamp.png'
import light from './assets/light.png'
import mediumLight from './assets/medium_light.png'
import sadLight from './assets/sad_light.png'
import { ScoreContext } from './context/score.context'
import './Lamp.css'

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

  const { score } = useContext(ScoreContext)
  const [showBright, setShowBright] = useState(false)
  const [showMedium, setShowMedium] = useState(false)
  const [showSad, setShowSad] = useState(false)

  useEffect(() => {
    setShowSad(false)
    setShowMedium(false)
    setShowBright(false)

    if (score > 2) {
      setShowBright(true)
      return
    }
    if (score > -1) {
      setShowMedium(true)
      return
    }
    setShowSad(true)

  }, [score])

  return (
    <div id={LAMP_ID}>
      <img className="img light"style={{opacity: showBright ? 1 : 0}} src={light}/>
       <img className="img light" style={{opacity: showMedium ? 1 : 0}} src={mediumLight}/>
       <img className="img lamp" style={{opacity: (showBright || showMedium) ? 1 : 0}} src={lamp}/>

       <img className="img light" style={{opacity: showSad ? 1 : 0}} src={sadLight}/>
       <img className="img lamp" style={{opacity: showSad ? 1 : 0}} src={sadLamp}/>
    </div>
  )
}

