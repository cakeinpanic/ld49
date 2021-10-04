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
    <>
      {/*<div className="debug">*/}
      {/*  <div className="btn btn--stripe" onClick={() => clicked(-1)}>minus</div>*/}
      {/*  <div className="btn btn--stripe" onClick={() => clicked(1)}>plus</div>*/}

      {/*  <div className="score">Score: {score}</div>*/}
      {/*</div>*/}
    <div className="Buttons">

      {
        getAnswers()
          .map(
            a => <div className="btn btn--stripe" key={a.text}
                      onClick={() => clicked(a.score)}>{a.text}</div>)
      }
    </div>
      </>
  )
}

