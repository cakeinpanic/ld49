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


  useEffect(() => {
    setLampState(getStateByScore(score))
  }, [score])

  const setGameOver = () => {

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
  return (
    <>
      <LoadedContextProvider setAllIsLoaded={setAllIsLoaded}>
        <SpeechContextProvider setGameOver={setGameOver}>
          <ScoreContext.Provider value={{ score, setScore, lampState }}>

            <Music gameStarted={gameStarted}/>
            <div className={'Game ' + lampState + (gameStarted ? ' started': '')} >
              <div className='dark bg '/>
              <div className='light bg '/>
              <Lamp showControls={showControls}/>
            </div>

            {showControls && <Buttons/>}
            {showDoor && <Doors allIsLoaded={allIsLoaded} onStart={startTheGame}/>}
          </ScoreContext.Provider>
        </SpeechContextProvider>
      </LoadedContextProvider>
    </>
  )
}

export default App
