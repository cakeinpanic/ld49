import { useEffect, useState } from 'react'
import './App.css'
import lamp from './assets/lamp.png'
import light from './assets/light.png'
import { Buttons } from './Buttons'
import { ScoreContext } from './context/score.context'
import { SpeechContextProvider } from './context/speech.context'
import { Music } from './Music'
import { Speech } from './Speech'

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

  const [gameStarted, setGameStarted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (gameStarted) {
      setShowControls(true)
    }
  }, [gameStarted])

  const setGameOver = () => {

  }

  return (
    <>

      <SpeechContextProvider setGameOver={setGameOver}>
        <ScoreContext.Provider value={{ score, setScore }}>
          <Music gameStarted={gameStarted}/>
          <div className="Game">
            <img className="img light" src={light}/>
            <img className="img lamp" src={lamp}/>
            {showControls && <Speech/>}
            {!gameStarted && <button className="btn--stripe start-btn btn" onClick={() => {
              setGameStarted(true)
            }}>Play</button>}
          </div>
          {showControls && <Buttons/>}


        </ScoreContext.Provider>
      </SpeechContextProvider>
    </>
  )
}

export default App
