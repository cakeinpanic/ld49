import { useCallback, useEffect, useRef } from 'react'
import { eLampState } from '../lampState.enum'
import { getRandomBetween } from './hook.utils'

export const useLightBlink = (lampState: eLampState) => {

  const blinkTimeoutRef = useRef<any>()

  const blink = useCallback(() => {
    const root = document.body
    let withoutLight = [100, 200]
    let nextBlink = [1000, 2000]
    switch (lampState) {
      case eLampState.nightmare:
        withoutLight = [100, 1500]
        nextBlink = [100, 500]
        break
      case eLampState.sad:
        withoutLight = [200, 500]
        nextBlink = [1000, 4000]
        break
      case eLampState.neutral:
        withoutLight = [100, 200]
        nextBlink = [5000, 8000]
        break
    }

    clearTimeout(blinkTimeoutRef.current)
    if (lampState === eLampState.nightmare || lampState === eLampState.sad || lampState === eLampState.neutral) {
      root?.style.setProperty('--opacity', '0%')
    }
    setTimeout(() => {
      root?.style.setProperty('--opacity', '100%')
      blinkTimeoutRef.current = setTimeout(() => {
        blink()
      }, getRandomBetween(nextBlink))
    }, getRandomBetween(withoutLight))
  }, [lampState])

  useEffect(() => {
    blink()
  }, [lampState, blink])

}
