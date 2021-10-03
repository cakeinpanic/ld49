import React from 'react'
import { eLampState } from '../lampState.enum'

export interface IContext {
  score: number,
  lampState: eLampState,
  setScore: Function
}

export const ScoreContext = React.createContext<IContext>({ score: 0, lampState: eLampState.neutral, setScore: () => {} })
