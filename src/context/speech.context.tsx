import React, { useContext, useState } from 'react'
import { eLampState } from '../lampState.enum'
import { BORING_PHRASE, FIRST_PHRASE, IAnswer, IState, LOOSE_PHRASE, REST_PHRASES, WIN_PHRASE } from '../PHRASES'
import { ScoreContext } from './score.context'

export interface ISpeechContext {
  currentPhraseIndex: number
  setNextPhrase: Function
  getQuestion: () => string
  getAnswers: () => IAnswer[],
}

const initialState = {
  currentPhraseIndex: 0,
  setNextPhrase: () => {},
  getQuestion: () => 'string',
  getAnswers: () => [],
}

const shuffle = (arr: any[]) => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}
const PHRASES: IState[] = [FIRST_PHRASE, ...shuffle(REST_PHRASES)]

export const SpeechContext = React.createContext<ISpeechContext>(initialState)

export function SpeechContextProvider({
                                        isGameOver,
                                        setGameOver,
                                        children
                                      }: { isGameOver: boolean, setGameOver: Function, children: any }) {
  const { lampState } = useContext(ScoreContext)
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  const setNextPhrase = () => {
    PHRASES[currentPhraseIndex].used = true
    if (currentPhraseIndex === PHRASES.length - 1) {
      setGameOver()
    } else {
      setCurrentPhraseIndex(currentPhraseIndex + 1)
    }
  }

  return (
    <SpeechContext.Provider value={
      {
        currentPhraseIndex, setNextPhrase,
        getQuestion: () => {
          let phrase: IState
          if (isGameOver) {
            phrase = lampState === eLampState.nightmare ? LOOSE_PHRASE :
              (lampState === eLampState.happy ? WIN_PHRASE : BORING_PHRASE)
          } else {
            phrase = PHRASES[currentPhraseIndex]
          }

          return phrase?.question
        },
        getAnswers: () => {
          let phrase: IState
          if (isGameOver) {
            phrase = lampState === eLampState.nightmare ? LOOSE_PHRASE :
              (lampState === eLampState.happy ? WIN_PHRASE : BORING_PHRASE)
          } else {
            phrase = PHRASES[currentPhraseIndex]
          }
          return phrase?.answers || []
        }
      }
    }>
      {children}
    </SpeechContext.Provider>
  )
}
