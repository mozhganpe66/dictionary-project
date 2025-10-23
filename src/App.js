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
      <footer className="App-footer"><small>coded by Shecodes</small></footer>
      </div>
    </div>
  );
}

export default App;
