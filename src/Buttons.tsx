import { useContext } from 'react'
import './Buttons.css'
import { ScoreContext } from './context/score.context'
import { SpeechContext } from './context/speech.context'

export function Buttons() {
  const { score, setScore } = useContext(ScoreContext)
  const { getAnswers, setNextPhrase } = useContext(SpeechContext)

  const clicked = (answerScore: number) => {
    setScore(score + answerScore)
    setNextPhrase()

  }
  return (
    <div className="Buttons">
      <div className="score">Score: {score}</div>
      {
        getAnswers()
          .map(
            a => <div className="btn btn--stripe" key={a.text}
                      onClick={() => clicked(a.score)}>{a.text}</div>)
      }
    </div>
  )
}

