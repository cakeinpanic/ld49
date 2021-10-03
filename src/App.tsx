import lamp from './lamp.png';
import light from './light.png';
import './App.css';

function App() {
  return (
     <div className="Game">
       <img className="img light" src={light}/>
       <img className="img lamp" src={lamp}/>

     </div>
  );
}

export default App;
