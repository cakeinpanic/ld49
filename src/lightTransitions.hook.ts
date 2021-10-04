import { useCallback, useEffect, useRef } from 'react'
import { eLampState } from './lampState.enum'

const LAMP_ID = 'lamp'

function getRandomBetween([min, max]: number[]) {
  const random = Math.random() * (max - min) + min

  return random
}

export const useLightTransitions = (lampState: eLampState) => {
  const timeoutRef = useRef<any>()

  const changeColor = useCallback(() => {
    clearTimeout(timeoutRef.current)
    const root = document.getElementById(LAMP_ID)

    if (lampState === eLampState.ok || lampState === eLampState.happy || lampState === eLampState.neutral) {
      root?.style.setProperty('--brightness', getRandomBetween([70, 120]) + '%')
      root?.style.setProperty('--hue', getRandomBetween([0, 180]) + 'deg')
      root?.style.setProperty('--saturate', getRandomBetween([70, 120]) + '%')
    } else {
      root?.style.setProperty('--hue', 0 + 'deg')
      root?.style.setProperty('--saturate', 30 + '%')
    }
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
