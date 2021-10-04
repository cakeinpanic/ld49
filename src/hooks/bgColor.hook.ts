import { useEffect } from 'react'
import { eLampState } from '../lampState.enum'

function setBgColor(lampState: eLampState) {
  const root = document.body

  switch (lampState) {
    case eLampState.happy:
    case eLampState.ok:
    case eLampState.neutral:
      root?.style.setProperty('--bg', '#3d3d46')
      break
    case eLampState.sad:
      root?.style.setProperty('--bg', '#1d1d26')
      break
    case eLampState.nightmare:
      root?.style.setProperty('--bg', '#1a1a1d')
  }

}

export const useBgColor = (lampState: eLampState) => {
  useEffect(() => {
    setBgColor(lampState)
  }, [lampState])
}
