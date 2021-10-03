import { useContext } from 'react'
import './Speech.css'
import { ScoreContext } from './context/score.context'

export function Speech() {
  const { score, setScore } = useContext(ScoreContext)


  return (

    <div className="speech-container">
      <div className="speech">
    hey you
    </div>
    </div>
  )
}

