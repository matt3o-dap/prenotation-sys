import React, {useEffect} from 'react';
import Amplify, {API} from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './App.css';

Amplify.configure(config);

function App() {

  const [userName, setUserName] = React.useState('');
  const [users, setUsers] = React.useState([]);


  useEffect(() => {
    API.get('apiPrenotationSys', '/utenti/nome').then((petRes) => {
      setUsers([...users, ...petRes]);
      console.log(petRes);
    });
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post('apiPrenotationSys', '/utenti', {
      body: {
        nome: userName,
        cognome: userName,
      },
    }).then(() => {
        setUsers([...users, {nome: userName, cognome: userName}])
    });
  };

  return (

    
    <div className="App">
      <header className="App-header">
        Hello <AmplifySignOut />
        <form onSubmit={handleSubmit}>
          <input value={userName} placeholder="Nome" onChange={(e) =>setUserName(e.target.value)}/>
          <button>Add User</button>
        </form>
        <ul>
          {users.map((user) => (
            <li>{user.nome}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
