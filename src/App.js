import logo from './logo.svg';
import './App.css';
import UploadImages from './uploadImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="App">
     <UploadImages></UploadImages>
    </div>
        </a>
      </header>
    </div>
  );
}

export default App;
