import { useState } from 'react'
import useSound from 'use-sound'
import './App.css'
import { Buttons } from './Buttons'
import lamp from './lamp.png'
import light from './light.png'
import {ScoreContext} from './score.context'
const music = require('./music.mp3').default
const root = document.documentElement

function getRandomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function changeColor(timeout: number) {
  setTimeout(() => {
    root.style.setProperty('--brightness', getRandomBetween(70, 120) + '%')
    root.style.setProperty('--hue', getRandomBetween(0, 180) + 'deg')
    root.style.setProperty('--saturate', getRandomBetween(70, 120) + '%')
    changeColor(getRandomBetween(1000, 10000))
  }, timeout)
}

function blink() {
  root.style.setProperty('--opacity', '0%')
  setTimeout(() => {
    root.style.setProperty('--opacity', '100%')
    setTimeout(() => {
      blink()
    }, getRandomBetween(1000, 10000))
  }, getRandomBetween(100, 200))
}

function App() {
  changeColor(0)
  blink()

  const [play] = useSound(music, { loop: true, soundEnabled: true, volume: .4 })
  const [showBtn, setShowBtn] = useState(true)
  const [score, setScore] = useState(0)

  return (
    <>
      <ScoreContext.Provider value={{ score, setScore }}>
      <div className="Game">
        <img className="img light" src={light}/>
        <img className="img lamp" src={lamp}/>
        {/*{showBtn && <button className="start-btn" onClick={() => {*/}
        {/*  // play();*/}
        {/*  setShowBtn(false)*/}
        {/*}}>Play</button>}*/}
      </div>
      <Buttons/>
      </ScoreContext.Provider>
    </>
  )
}

export default App
