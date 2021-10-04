import { useCallback, useEffect, useRef } from 'react'
import { eLampState } from '../lampState.enum'
import { getRandomBetween, LAMP_ID } from './hook.utils'

function setProps(lampState: eLampState) {
  const root = document.getElementById('root')

  if (lampState === eLampState.ok || lampState === eLampState.happy || lampState === eLampState.neutral) {
    const hue = lampState === eLampState.ok ? getRandomBetween([0, 180]) : getRandomBetween([70, 150])
    const brightness = lampState === eLampState.happy ? getRandomBetween([70, 120]) : getRandomBetween([60, 90])

    root?.style.setProperty('--brightness', brightness + '%')
    root?.style.setProperty('--hue', hue + 'deg')
    root?.style.setProperty('--saturate', getRandomBetween([90, 110]) + '%')
  } else {
    root?.style.setProperty('--hue', 0 + 'deg')
    root?.style.setProperty('--saturate', 30 + '%')
  }
}

export const useLightTransitions = (lampState: eLampState) => {
  const timeoutRef = useRef<any>()

  const changeColor = useCallback(() => {
    clearTimeout(timeoutRef.current)
    setProps(lampState)

    let nextChange = [1000, 1000]

    switch (lampState) {
      case eLampState.happy:
        nextChange = [500, 1000]
        break
      case eLampState.ok:
        nextChange = [2000, 5000]
        break
      case eLampState.neutral:
        nextChange = [2000, 5000]
        break
    }

    timeoutRef.current = setTimeout(changeColor, getRandomBetween(nextChange))
  }, [lampState])

  useEffect(() => {
    changeColor()
  }, [lampState, changeColor])

  return timeoutRef.current
}
