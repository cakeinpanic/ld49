import { useContext, useEffect, useRef, useState } from 'react'
import useSound from 'use-sound'
import './App.css'
import { ScoreContext } from './context/score.context'

const normal = require('./assets/normal.mp3').default
const happy = require('./assets/happy.mp3').default

enum eSound {
  happy = 'happy', normal = 'normal', sad = 'sad'
}

export function Music({ gameStarted }: { gameStarted: boolean }) {
  const { score } = useContext(ScoreContext)

  const [playNormal, { stop: stopNormal }] = useSound(normal, { loop: true, soundEnabled: true, volume: .4 })
  const [playHappy, { stop: stopHappy }] = useSound(happy, { loop: true, soundEnabled: true, volume: .4 })
  const [currentSound, setCurrentSound] = useState<eSound | null>(null)

  const prevSoundRef = useRef<eSound | null>()

  useEffect(() => {
    if (true || !gameStarted) {
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
    if (!currentSound || (prevSoundRef.current !== null && prevSoundRef.current === currentSound)) {
      return
    }
    switch (prevSoundRef.current) {
      case eSound.normal:
        stopNormal()
        break
      case eSound.sad:
        break
      case eSound.happy:
        stopHappy()
        break
    }

    switch (currentSound) {
      case eSound.normal:
        playNormal()
        break
      case eSound.sad:
        break
      case eSound.happy:
        playHappy()
        break
    }

  }, [currentSound, stopNormal, stopHappy, playHappy, playNormal])

  useEffect(() => {
    prevSoundRef.current = currentSound
  }, [currentSound])

  return (
    <>

    </>
  )
}

