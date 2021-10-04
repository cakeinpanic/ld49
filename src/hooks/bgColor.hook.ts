import { useEffect } from 'react'
import { eLampState } from '../lampState.enum'

function setBgColor(lampState: eLampState) {
  const root = document.body
  let start = 10
  let end = 80
  let opacity = 100

  switch (lampState) {
    case eLampState.happy:
      start = 56
      end = 80
      opacity = 50
      break
    case eLampState.ok:
      start = 40
      end = 80
      opacity = 60
      break
    case eLampState.neutral:
      start = 30
      end = 80
      opacity = 70
      break
    case eLampState.sad:
      start = 30
      end = 80
      opacity = 90
      break
    case eLampState.nightmare:
      start = 10
      end = 80
      opacity = 100
      break
  }

  root?.style.setProperty('--darkness-start', start + '%')
  root?.style.setProperty('--darkness-end', end + '%')
  root?.style.setProperty('--darkness-opacity', opacity + '%')
}

export const useBgColor = (lampState: eLampState) => {
  useEffect(() => {
    setBgColor(lampState)
  }, [lampState])
}
