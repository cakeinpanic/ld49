import { useContext, useEffect, useState } from 'react'
import useSound from 'use-sound'
import './App.css'
import { LoadedContext } from './context/loaded.context'
import { ScoreContext } from './context/score.context'

const nightmare = require('./assets/ludum_dare_beta_-5.mp3').default
const sad = require('./assets/ludum_dare_beta_-2.5.mp3').default
const neutral = require('./assets/ludum_dare_beta_0.mp3').default
const ok = require('./assets/ludum_dare_beta_2.5.mp3').default
const happy = require('./assets/ludum_dare_beta_5.mp3').default

enum eSound {
  happy = 'happy', ok = 'ok', neutral = 'neutral', sad = 'sad', nightmare = 'nightmare'
}

const VOLUME = .2
const params = { loop: true, soundEnabled: true, volume: 0 }

function doSound(currentSound: eSound | null, soundState: eSound, howlerObject: any) {
  if (!howlerObject) {
    return
  }
  if (!howlerObject.playing()) {
    howlerObject.play()
  }
  if (currentSound === soundState) {
    howlerObject.fade(howlerObject.volume(), VOLUME, 500)
  } else {
    howlerObject.fade(howlerObject.volume(), 0, 500)
  }
}

export function Music({ gameStarted }: { gameStarted: boolean }) {
  const { score } = useContext(ScoreContext)
  const { soundLoaded } = useContext(LoadedContext)

  const [, { sound: nightmareSound }] = useSound(nightmare, params)
  const [, { sound: sadSound }] = useSound(sad, params)
  const [, { sound: neutralSound }] = useSound(neutral, params)
  const [, { sound: okSound }] = useSound(ok, params)
  const [, { sound: happySound }] = useSound(happy, params)

  const [currentSound, setCurrentSound] = useState<eSound | null>(null)

  useEffect(() => {

    if (neutralSound?.state() === 'loaded'
      && okSound?.state() === 'loaded'
      && nightmareSound?.state() === 'loaded'
      && sadSound?.state() === 'loaded'
      && happySound?.state() === 'loaded'
    ) {
      soundLoaded && soundLoaded(true)
    }
  }, [soundLoaded, neutralSound, happySound, nightmareSound, sadSound, okSound])

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

    if (score > 2.5) {
      setCurrentSound(eSound.happy)
      return
    }

    if (score > 0) {
      setCurrentSound(eSound.ok)
      return
    }
    if (score > -2.5) {
      setCurrentSound(eSound.neutral)
      return
    }
    if (score > -5) {
      setCurrentSound(eSound.sad)
    }
    if (score) {
      setCurrentSound(eSound.nightmare)
    }
  }, [score, gameStarted])

  useEffect(() => {
    doSound(currentSound, eSound.neutral, neutralSound)
    doSound(currentSound, eSound.nightmare, nightmareSound)
    doSound(currentSound, eSound.sad, sadSound)
    doSound(currentSound, eSound.ok, okSound)
    doSound(currentSound, eSound.happy, happySound)
  }, [currentSound, neutralSound, happySound, okSound, sadSound, nightmareSound])

  return (
    <>

    </>
  )
}

