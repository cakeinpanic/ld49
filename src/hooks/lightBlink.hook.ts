import { useCallback, useEffect, useRef, useState } from 'react'
import { eLampState } from '../lampState.enum'
import {
  NEUTRAL_BLINK_SCENARIO,
  NIGTHMARE_BLINK_SCENARIO,
  NO_BLINK_SCENARIO,
  SAD_BLINK_SCENARIO
} from './lightScenarios'

export const useLightBlink = (lampState: eLampState) => {

  const blinkTimeoutRef = useRef<any>()
  const [scenario, setScenario] = useState(SAD_BLINK_SCENARIO)
  const [nextStep, setNextStep] = useState(0)

  const blink = useCallback(() => {
    const root = document.body
    clearTimeout(blinkTimeoutRef.current)
    root?.style.setProperty('--opacity', scenario[nextStep].opacity + '%')

    blinkTimeoutRef.current = setTimeout(() => {
      setNextStep((nextStep + 1) % scenario.length)
    }, scenario[nextStep].time)
  }, [ scenario, nextStep])

  useEffect(() => {
    let scenario: any
    switch (lampState) {
      case eLampState.happy:
      case eLampState.ok:
        scenario = NO_BLINK_SCENARIO
        break
      case eLampState.neutral:
        scenario = NEUTRAL_BLINK_SCENARIO
        break
      case eLampState.sad:
        scenario = SAD_BLINK_SCENARIO
        break
      case eLampState.nightmare:
        scenario = NIGTHMARE_BLINK_SCENARIO
        break
    }
    setScenario(scenario)
    if (nextStep % 2) {
      setNextStep(1)
    } else {
      setNextStep(0)
    }
  }, [lampState, nextStep])

  useEffect(() => {
    blink()
  }, [blink])

}
