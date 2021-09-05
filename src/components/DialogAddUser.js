import React from "react";
import Amplify, {API, graphqlOperation} from 'aws-amplify';
import {createUtenti} from '../graphql/mutations';
import { 
    Button, 
    Dialog, 
    DialogTitle, 
    DialogContent, 
    DialogActions, 
    Paper, 
    Grid, 
    TextField, 
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    makeStyles
    } from '@material-ui/core';



export default function DialogAddUser() {

    const [open, setOpen] = React.useState(false);

    const [nome, setNome] = React.useState('');
    const [cognome, setCognome] = React.useState('');
    const [codice_fiscale, setCodiceFiscale] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        setNome(e.target.value);
        setCognome(e.target.value);
        setCodiceFiscale(e.target.value);
    }

    const inviaForm = async (e) => {
        // if(nome != '' && nome != '' && codice_fiscale != ''){
        //     console.log("invio form");
        // }{
        //     console.log('non invio form')
        // }

        try {
            const utente = {
                nome: 'teo',
                cognome: 'teo',
                codice_fiscale: 'cplasdmas',
                prenotation_pin: '123456'
            }
            const userData = await API.graphql(graphqlOperation(createUtenti, {input: utente}));
            console.log('user add ok', userData);
        }catch (err) {
            console.log('errore inserimento', err)
        }
    }


    const classes = useStyles();
    return (
        <div>
            <div>ciao</div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Aggiungi utente
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth={'md'}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose}>Registrazione nuovo utente</DialogTitle>
                    
                    <DialogContent dividers>
                        <Grid container spacing={3} >
                            <Grid item xs={6} className={classes.grid_item}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Cognome"
                                    variant="outlined"
                                    className={classes.input_field}
                                    onChange={handleSubmit}
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.grid_item}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Nome"
                                    variant="outlined"
                                    className={classes.input_field}
                                    onChange={handleSubmit}
                                />
                            </Grid>
                            <Grid item xs={6} className={classes.grid_item}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Codice Fiscale"
                                    variant="outlined"
                                    className={classes.input_field}
                                    onChange={handleSubmit}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Annulla
                        </Button>
                        <Button onClick={inviaForm} color="primary" type="submit">
                            Registra utente
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    )

}

const useStyles = makeStyles({
    grid_container:{
        width: '100%',
    },
    grid_item:{
        width: '100%',
    },
    input_field: {
        width: '100%',
    },
  });