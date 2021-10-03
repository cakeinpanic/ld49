import React from 'react'
export interface IContext{
  score: number,
  setScore: Function
}

export const ScoreContext = React.createContext<IContext>({score: 0, setScore: ()=>{}});
