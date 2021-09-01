import React, {useEffect} from 'react';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';
import './App.css';

Amplify.configure(config);

function App() {


  useEffect(() => {
    API.get('prenotationApi', '/utenti/nome')
    .then(petRes => console.log(petRes));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello by matteo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
