import './Buttons.css'
import { useState } from 'react'

const music = require('./music.mp3').default
const root = document.documentElement

export function Buttons() {
  const [score, setScore] = useState(0)

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
      <div className="btn btn--stripe btn--large">Hug</div>
      <div className="btn btn--stripe btn--large">Say hi</div>
      <div className="btn btn--stripe btn--large">Make tea</div>
      <div className="btn btn--stripe btn--large">Punch</div>
    </div>
  )
}

