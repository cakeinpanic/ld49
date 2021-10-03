export enum eLampState {
  happy = 'happy', ok = 'ok', neutral = 'neutral', sad = 'sad', nightmare = 'nightmare'
}

export function getStateByScore(score: number): eLampState {
  if (score > 4.5) {
    return eLampState.happy
  }
  if (score > 2.5) {
    return (eLampState.ok)
  }

  if (score > 0) {
    return (eLampState.neutral)
  }

  if (score > -2.5) {
    return (eLampState.sad)
  }

  return (eLampState.nightmare)

}
