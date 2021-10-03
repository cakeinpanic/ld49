import { useContext } from 'react'
import { ScoreContext } from './context/score.context'
import './Speech.css'
import { SpeechContext } from './context/speech.context'

export function Speech() {
  const { score, setScore } = useContext(ScoreContext)
  const { getQuestion } = useContext(SpeechContext)

  return (

    <div className="speech-container">
      <div className="speech">
        {getQuestion()}
      </div>
    </div>
  )
}

