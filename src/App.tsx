import { useEffect, useState } from 'react'
import './App.css'
import { Buttons } from './Buttons'
import { ScoreContext } from './context/score.context'
import { SpeechContextProvider } from './context/speech.context'
import { Lamp } from './Lamp'
import { Music } from './Music'
import { Speech } from './Speech'

const root = document.documentElement

function App() {

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
            <Lamp/>
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
