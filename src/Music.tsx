import { useContext, useEffect, useRef, useState } from 'react'
import useSound from 'use-sound'
import './App.css'
import mute from './assets/mute.png'
import { LoadedContext } from './context/loaded.context'
import { ScoreContext } from './context/score.context'
import { eLampState } from './lampState.enum'

const nightmare = require('./assets/ludum_dare_beta_-5.mp3').default
const sad = require('./assets/ludum_dare_beta_-2.5.mp3').default
const neutral = require('./assets/ludum_dare_beta_0.mp3').default
const ok = require('./assets/ludum_dare_beta_2.5.mp3').default
const happy = require('./assets/ludum_dare_beta_5.mp3').default

const plus = require('./assets/ludum_dare_beta_plus.mp3').default
const minus = require('./assets/ludum_dare_beta_minus.mp3').default

const VOLUME = .3
const FADE_DURATION = 800
const params = { loop: true, soundEnabled: true, volume: 0 }

function doSound(currentSound: eLampState | null, soundState: eLampState, howlerObject: any, isAllMuted: boolean) {
  if (!howlerObject) {
    return
  }
  if (currentSound === soundState && !isAllMuted) {
    howlerObject.fade(howlerObject.volume(), VOLUME, FADE_DURATION)
  } else {
    howlerObject.fade(howlerObject.volume(), 0, FADE_DURATION)
  }
}

export function Music({ gameStarted }: { gameStarted: boolean }) {
  const { score, lampState } = useContext(ScoreContext)
  const { soundLoaded } = useContext(LoadedContext)
  const [isAllMuted, setIsAllMuted] = useState(false)
  const [, { sound: nightmareSound }] = useSound(nightmare, params)
  const [, { sound: sadSound }] = useSound(sad, params)
  const [, { sound: neutralSound }] = useSound(neutral, params)
  const [, { sound: okSound }] = useSound(ok, params)
  const [, { sound: happySound }] = useSound(happy, params)

  const [, { sound: plusJingle }] = useSound(plus, { loop: false, volume: VOLUME })
  const [, { sound: minusJingle }] = useSound(minus, { loop: false, volume: VOLUME })

  const [currentSound, setCurrentSound] = useState<eLampState | null>(null)

  const prevScore = useRef<number>(score)

  useEffect(() => {
    if (neutralSound?.state() === 'loaded'
      && okSound?.state() === 'loaded'
      && nightmareSound?.state() === 'loaded'
      && sadSound?.state() === 'loaded'
      && happySound?.state() === 'loaded'
    ) {
      soundLoaded && soundLoaded(true)
      neutralSound.play()
      okSound.play()
      happySound.play()
      nightmareSound.play()
      sadSound.play()
    }

  }, [soundLoaded, neutralSound, happySound, nightmareSound, sadSound, okSound])
  //
  //useEffect(() => {
  //
  //  console.log(score, currentSound, [happySound, okSound, neutralSound, sadSound, nightmareSound].map(s => {
  //    return (s?.volume() + s?.state())
  //  }))
  //}, [currentSound, score,  neutralSound, happySound, okSound, sadSound, nightmareSound])

  useEffect(() => {
      if (!gameStarted) {
        return
      }
      setCurrentSound(lampState)
    },
    [lampState, gameStarted]
  )

  useEffect(() => {
    if (prevScore.current === score) {
      return
    }
    prevScore.current = score
    if (isAllMuted) {
      return
    }
    if (prevScore.current < score) {
      plusJingle?.play()
    } else {
      minusJingle?.play()
    }

  }, [score, minusJingle, plusJingle, isAllMuted])

  useEffect(() => {
    doSound(currentSound, eLampState.neutral, neutralSound, isAllMuted)
    doSound(currentSound, eLampState.nightmare, nightmareSound, isAllMuted)
    doSound(currentSound, eLampState.sad, sadSound, isAllMuted)
    doSound(currentSound, eLampState.ok, okSound, isAllMuted)
    doSound(currentSound, eLampState.happy, happySound, isAllMuted)
  }, [isAllMuted, currentSound, neutralSound, happySound, okSound, sadSound, nightmareSound])

  const muteAll = () => {
    setIsAllMuted(!isAllMuted)
    localStorage.setItem('mute', '' + !isAllMuted)
  }

  useEffect(() => {
    setIsAllMuted(localStorage.getItem('mute') === 'true')
  }, [])

  return (
    <>
      <img className={'mute ' + isAllMuted} src={mute} onClick={muteAll}/>
    </>
  )
}

