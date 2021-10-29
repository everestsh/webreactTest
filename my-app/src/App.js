

import Counter from './Counter';

import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div> 
          <h1>Lambda</h1>
        </div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <span> Hello World </span>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Counter />

      </header>


    </div>
  );
}

export default App;
