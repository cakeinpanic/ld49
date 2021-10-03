import './App.css'
import lamp from './lamp.png'
import light from './light.png'

const root = document.documentElement

function getRandomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min
}

function changeColor(timeout: number) {
  setTimeout(() => {
    root.style.setProperty('--brightness', getRandomBetween(70, 120) + '%')
    root.style.setProperty('--hue', getRandomBetween(0, 180) + 'deg')
    root.style.setProperty('--saturate', getRandomBetween(70, 120) + '%')
    changeColor(getRandomBetween(1000, 3000))
  }, timeout)
}

function blink() {
  root.style.setProperty('--opacity', '0%')
  setTimeout(() => {
    root.style.setProperty('--opacity', '100%')
    setTimeout(() => {
      blink()
    }, getRandomBetween(1000, 3000))
  }, getRandomBetween(100, 200))
}

function App() {
  changeColor(0)
  blink()
  return (
    <div className="Game">
      <img className="img light" src={light}/>
      <img className="img lamp" src={lamp}/>
    </div>
  )
}

export default App
