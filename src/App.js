import logo from "./logo.svg";
import "./App.css";
import Child from "./Child.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Child name="shulbhi" surname="gupta" />
        <Child name="megha" surname="agrawal" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello React
        </a>
      </header>
    </div>
  );
}

export default App;
