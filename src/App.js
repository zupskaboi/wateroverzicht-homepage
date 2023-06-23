import './App.css';
import zwembad from '../src/img/zwembad.png'
import wave from '../src/img/wave.png'

function App() {
  return (
    <div className="App">
      <div className="front-background">
        <p className="greetings-text">Goedemorgen Anna</p>
        <div className="home-cirkels">
          <p className='punten-cirkel'>300 punten</p>
          <p className='besparing-cirkel'>1576 L bespaard</p>
        </div>
        <p>Oktober 2023</p>
        <p className="gevulde-zwembaden-text">6 gevulde zwembaden</p>
        <img className='zwembad-img' src={zwembad}></img>
        <img className='wave-img' src={wave}></img>
      </div>
    </div>
  );
}

export default App;
