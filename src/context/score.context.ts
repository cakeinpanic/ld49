import React from 'react'
import { eLampState } from '../lampState.enum'

export interface IContext {
  score: number,
  lampState: eLampState,
  setScore: Function
  isGameOver: boolean
}

export const ScoreContext = React.createContext<IContext>({ score: 0,isGameOver: false, lampState: eLampState.neutral, setScore: () => {} })
