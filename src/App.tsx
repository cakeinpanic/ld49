import React, { useEffect, useState } from 'react'
import './App.css'
import { Buttons } from './Buttons'
import { LoadedContextProvider } from './context/loaded.context'
import { ScoreContext } from './context/score.context'
import { SpeechContextProvider } from './context/speech.context'
import { Doors } from './Doors'
import { Lamp } from './Lamp'
import { getStateByScore } from './lampState.enum'
import { Music } from './Music'

function App() {

  const [gameStarted, setGameStarted] = useState(false)
  const [showDoor, setShowDoor] = useState(true)
  const [showControls, setShowControls] = useState(false)
  const [score, setScore] = useState(0)
  const [lampState, setLampState] = useState(getStateByScore(score))

  const [allIsLoaded, setAllIsLoaded] = useState(false)
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    setLampState(getStateByScore(score))
  }, [score])

  const setGameOver = () => {
    setIsGameOver(true)
  }

  const startTheGame = () => {
    setTimeout(() => {
      setGameStarted(true)
    }, 900)
    setTimeout(() => {
      setShowDoor(false)
    }, 5000)
    setTimeout(() => {
      setShowControls(true)
    }, 3000)
  }
  const doRestartGame = () => {
    document.location.reload()
  }

  return (
    <>
      <LoadedContextProvider setAllIsLoaded={setAllIsLoaded}>
        <ScoreContext.Provider value={{ isGameOver, score, setScore, lampState }}>
          <SpeechContextProvider isGameOver={isGameOver} setGameOver={setGameOver}>
            <div
              className={['Game', lampState, (gameStarted ? ' started' : ''), isGameOver ? 'gameover' : ''].join(' ')}>
              <div className='dark bg '/>
              <div className='light bg '/>
              <Lamp showControls={showControls}/>
            </div>
            {showControls && <Buttons doRestartGame={doRestartGame}/>}
            {showDoor && <Doors allIsLoaded={allIsLoaded} onStart={startTheGame}/>}
            <Music gameStarted={gameStarted}/>
          </SpeechContextProvider>
        </ScoreContext.Provider>

      </LoadedContextProvider>
    </>
  )
}

export default App
