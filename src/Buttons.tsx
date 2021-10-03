import { useContext } from 'react'
import './Buttons.css'
import { ScoreContext } from './score.context'

const music = require('./music.mp3').default
const root = document.documentElement

export function Buttons() {
  const { score, setScore } = useContext(ScoreContext)

  const makeSadder = () => {
    const newScore = score - 1
    setScore(newScore)
  }

  const makeHappier = () => {
    const newScore = score + 1
    setScore(newScore)
  }

  return (
    <div className="Buttons">
      <div className="score">Score: {score}</div>
      <div className="btn btn--stripe btn--large">Hug</div>
      <div className="btn btn--stripe btn--large">Say hi</div>
      <div className="btn btn--stripe btn--large">Make tea</div>
      <div className="btn btn--stripe btn--large">Punch</div>
    </div>
  )
}

