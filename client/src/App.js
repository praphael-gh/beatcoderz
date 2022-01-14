import './App.css';
import BeatButtons from './BeatButtons';
import GlobalAudio from './GlobalAudio';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi</h1>
      </header>
      <div id="blackbox">
        <BeatButtons />
        <GlobalAudio />
      </div>
    </div>
  );
}

export default App;
