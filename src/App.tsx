import React, { useEffect, useState } from 'react'
import './App.css'
import { Buttons } from './Buttons'
import { LoadedContextProvider } from './context/loaded.context'
import { ScoreContext } from './context/score.context'
import { SpeechContextProvider } from './context/speech.context'
import { Lamp } from './Lamp'
import { getStateByScore } from './lampState.enum'
import { Music } from './Music'
import { Speech } from './Speech'

function App() {

  const [gameStarted, setGameStarted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [score, setScore] = useState(0)
  const [lampState, setLampState] = useState(getStateByScore(score))

  const [allIsLoaded, setAllIsLoaded] = useState(false)

  useEffect(() => {
    if (gameStarted) {
      setShowControls(true)
    }
  }, [gameStarted])

  useEffect(() => {
    setLampState(getStateByScore(score))
  }, [score])

  const setGameOver = () => {

  }

  return (
    <>
      <LoadedContextProvider setAllIsLoaded={setAllIsLoaded}>
        <SpeechContextProvider setGameOver={setGameOver}>
          <ScoreContext.Provider value={{ score, setScore, lampState }}>

            <Music gameStarted={gameStarted}/>
            {!allIsLoaded && <button className="loading-btn btn--stripe btn">
              Loading...
            </button>}
            <div className={"Game "+ lampState} style={{ opacity: allIsLoaded ? 1 : 0 }}>
              <div className='light bg '/>
              <Lamp/>
              {showControls && <Speech/>}
              {
                !gameStarted &&
                <button className="btn--stripe start-btn btn"
                        onClick={() => {setGameStarted(true)}}>
                  Play
                </button>
              }
            </div>
            {showControls && <Buttons/>}
          </ScoreContext.Provider>
        </SpeechContextProvider>
      </LoadedContextProvider>
    </>
  )
}

export default App
