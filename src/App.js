import shecodesLogo from './shecodesLogo.png';
import Dictionary from './Dictionary'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={shecodesLogo} className="App-logo img-fluid" alt="logo" /> 
      </header>
      <main>
        <Dictionary defaultKeyword="sunset"/>
      </main>
      <footer className="App-footer"><small>This project is coded by <a href="https://github.com/mozhganpe66 " target="_blank" rel="noreferrer">Mozhgan P</a> and is open sourced in <a href="https://github.com/mozhganpe66/dictionary-project" target="_blank" rel="noreferrer">github</a></small></footer>
      </div>
    </div>
  );
}

export default App;
