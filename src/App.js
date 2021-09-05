import React, {useEffect} from 'react';
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import {listUtentis} from './graphql/queries';

//components
import DialogAddUser from './components/DialogAddUser';

// css
import './App.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


Amplify.configure(config);

function App() {

  const [users, setUsers] = React.useState([]);


  useEffect(() => {
    fetchUsers();
  }, [])

  const fetchUsers = async () => {
    try {
      const userData = await API.graphql(graphqlOperation(listUtentis));
      const userList = userData.data.listUtentis.items;
      console.log('user list', userList);
      setUsers(userList);
    }catch (err) {
      console.log('errore reperimento dati', err)
    }
  }

  

  return (
    <div className="App">
      <header >
        <AmplifySignOut />
        {/* <ul>
          {users.map((user) => (
            <li>{user.nome}</li>
          ))}
        </ul> */}
      </header>

      <Container maxWidth="sm">

        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Cognome</TableCell>
              <TableCell align="right">Nome</TableCell>
              <TableCell align="right">Codice Fiscale</TableCell>
              <TableCell align="right">PIN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component="th" scope="row">{user.id}</TableCell>
                <TableCell align="right">{user.nome}</TableCell>
                <TableCell align="right">{user.cognome}</TableCell>
                <TableCell align="right">{user.codice_fiscale}</TableCell>
                <TableCell align="right">{user.prenotation_pin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <DialogAddUser />

    </Container>

    </div>
  );
}

export default withAuthenticator(App);
