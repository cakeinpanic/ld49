import { useContext, useEffect, useState } from 'react'
import useSound from 'use-sound'
import './App.css'
import { LoadedContext } from './context/loaded.context'
import { ScoreContext } from './context/score.context'

const normal = require('./assets/normal.mp3').default
const happy = require('./assets/happy.mp3').default

enum eSound {
  happy = 'happy', normal = 'normal', sad = 'sad'
}

const VOLUME = .4

export function Music({ gameStarted }: { gameStarted: boolean }) {
  const { score } = useContext(ScoreContext)
  const { soundLoaded } = useContext(LoadedContext)


  const [playNormal, { sound: normalSound }] = useSound(normal,
    { loop: true, soundEnabled: true, volume: 0 })
  const [playHappy, { sound: happySound }] = useSound(happy,
    { loop: true, soundEnabled: true, volume: 0 })
  const [currentSound, setCurrentSound] = useState<eSound | null>(null)

  useEffect(() => {

    if (normalSound?.state() === 'loaded' && happySound?.state() === 'loaded') {
      soundLoaded && soundLoaded(true)
    }
  }, [soundLoaded,normalSound, happySound])

  useEffect(() => {
    if (!gameStarted) {
      return
    }

    if (score > 3) {
      setCurrentSound(eSound.happy)
      return
    }
    if (score > 2) {
      setCurrentSound(eSound.normal)

      return
    }
    if (score > -1) {
      setCurrentSound(eSound.normal)
      return
    }
    if (score > -3) {
      setCurrentSound(eSound.sad)

    }
  }, [score, gameStarted])

  useEffect(() => {
    if (!normalSound) {
      return
    }
    if (!normalSound.playing()) {
      playNormal()
    }
    if (currentSound === eSound.normal) {
      normalSound.fade(normalSound.volume(), VOLUME, 500)
    } else {
      normalSound.fade(normalSound.volume(), 0, 500)
    }
  }, [currentSound, normalSound, playNormal])

  useEffect(() => {
    if (!happySound) {
      return
    }
    if (!happySound.playing()) {
      playHappy()
    }
    if (currentSound === eSound.happy) {
      happySound.fade(happySound.volume(), VOLUME, 500)
    } else {
      happySound.fade(happySound.volume(), 0, 500)
    }
  }, [currentSound, happySound, playHappy])

  return (
    <>

    </>
  )
}

