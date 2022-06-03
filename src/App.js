import './App.css';
import ItemForm from './components/ItemComponent';

function App() {
  return (
    <div className="App"    >
        <p align="center">
            <a href="//architect.io" target="blank"><img src="https://docs.architect.io/img/logo.svg" width="320" alt="Architect Logo" /></a>
        </p>
      <header className="App-header" style={{backgroundColor: '#2ca85e'}}>
          <h1>Favorite Horror Films</h1>
          <ItemForm/>
      </header>
    </div>
  );
}

export default App;
