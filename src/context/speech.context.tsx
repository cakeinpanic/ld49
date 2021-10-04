import React, { useContext, useState } from 'react'
import { eLampState } from '../lampState.enum'
import { FIRST_PHRASE, IAnswer, IState, LOOSE_PHRASE, REST_PHRASES, WIN_PHRASE } from '../PHRASES'
import { ScoreContext } from './score.context'

export interface ISpeechContext {
  currentPhraseIndex: number
  setNextPhrase: Function
  getQuestion: () => string
  getAnswers: () => IAnswer[],
  winPhrase: IState,
  loosePhrase: IState,
}

const initialState = {
  currentPhraseIndex: 0,
  setNextPhrase: () => {},
  getQuestion: () => 'string',
  getAnswers: () => [],
  winPhrase: WIN_PHRASE,
  loosePhrase: LOOSE_PHRASE,
}

const shuffle = (arr: any[]) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
const PHRASES: IState[] = [FIRST_PHRASE, ...shuffle(REST_PHRASES)]

export const SpeechContext = React.createContext<ISpeechContext>(initialState)

export function SpeechContextProvider({  isGameOver, setGameOver, children }: {isGameOver: boolean, setGameOver: Function, children: any }) {
  const {lampState}= useContext(ScoreContext)
  const setNextPhrase = () => {
    PHRASES[currentPhraseIndex].used = true
    if (currentPhraseIndex === PHRASES.length - 1) {
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
        winPhrase: WIN_PHRASE,
        loosePhrase: LOOSE_PHRASE,
        getQuestion: () => {
          if(isGameOver){
            return lampState === eLampState.nightmare ? LOOSE_PHRASE.question :WIN_PHRASE.question
          }
          return PHRASES[currentPhraseIndex]?.question || 'Game over'
        },
        getAnswers: () => {
          if(isGameOver){
            return lampState === eLampState.nightmare ? LOOSE_PHRASE.answers :WIN_PHRASE.answers
          }
          return PHRASES[currentPhraseIndex]?.answers || []
        }
      }
    }>
      {children}
    </SpeechContext.Provider>
  )
}
