import React, {useEffect} from 'react';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';
import './App.css';

Amplify.configure(config);

function App() {


  useEffect(() => {
    API.get('apiPrenotationSys', '/utenti/nome').then((petRes) => console.log(petRes));
  }, [])

  const addUser = () => {
      API.post('apiPrenotationSys', '/utenti/nome', {
        body: {
          nome: 'Teo',
          cognome: 'Dapo'
        },
      }).then(() => {
          console.log("Add success!")
      });
  };

  return (

    
    <div className="App">
      <header className="App-header">
        <p>
          Hello by matteo
        </p>
        <button onClick={addUser}>
          Add
        </button>
      </header>
    </div>
  );
}

export default App;
