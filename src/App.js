import './App.css';
import Items from './components/Items';

function App() {
  return (
    <div className="App"    >
        <p align="center">
            <a href="//architect.io" target="blank"><img src="https://docs.architect.io/img/logo.svg" width="320" alt="Architect Logo" /></a>
        </p>
      <header className="App-header" style={{backgroundColor: '#2ca85e'}}>
          <h1>Favorite Horror Films</h1>
          <Items/>
      </header>
    </div>
  );
}

export default App;
