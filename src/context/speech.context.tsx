import React, { useState } from 'react'
import { FIRST_PHRASE, IAnswer, IState, REST_PHRASES } from '../phrases'

export interface ISpeechContext {
  currentPhraseIndex: number
  setNextPhrase: Function
  getQuestion: () => string
  getAnswers: () => IAnswer[]
}

const initialState = {
  currentPhraseIndex: 0,
  setNextPhrase: () => {},
  getQuestion: () => 'string',
  getAnswers: () => []
}

const shuffle = (arr: any[]) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
const PHRASES: IState[] = [FIRST_PHRASE, ...shuffle(REST_PHRASES)]

export const SpeechContext = React.createContext<ISpeechContext>(initialState)

export function SpeechContextProvider({ setGameOver, children }: { setGameOver: Function, children: any }) {
  const setNextPhrase = () => {
    PHRASES[currentPhraseIndex].used = true
    if (currentPhraseIndex === PHRASES.length - 1) {
      setCurrentPhraseIndex(-1)
      setGameOver()
    } else {
      setCurrentPhraseIndex(currentPhraseIndex + 1)
    }
  }
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  return (
    <SpeechContext.Provider value={
      {
        currentPhraseIndex, setNextPhrase,
        getQuestion: () => {
          return PHRASES[currentPhraseIndex]?.question || 'Game over'
        },
        getAnswers: () => {
          return PHRASES[currentPhraseIndex]?.answers || []
        }
      }
    }>
      {children}
    </SpeechContext.Provider>
  )
}
