import React, {useState} from "react";
import {
    Box, Button, Checkbox, Container,
    FormControl,
    FormControlLabel,
    FormLabel, InputLabel, MenuItem,
    Radio,
    RadioGroup, Select,
    TextField,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function App() {
    //Variables
    const [data, setData] = useState({
        name: '',
        surname: '',
        age: '',
        gender: '',
        proLang: '',
        rating:'',
        checkbox: false
    });

    //Enviar datos
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(true);
    };

    //Guardar el nombre
    const handleChangeName = (e) => {
        setData({
            ...data,
            name: e.target.value
        });
    };

    //Guardar el apellido
    const handleChangeSurname = (e) => {
        setData({
            ...data,
            surname: e.target.value
        });
    };

    //Guardar la edad
    const handleChangeAge = (e) => {
        setData({
            ...data,
            age: e.target.value
        });
    };

    //Guardar el genero
    const handleChangeGender = (e) => {
        setData({
            ...data,
            gender: e.target.value
        });
    };

    //Guardar el lenguaje de programacion
    const handleChangeProLang = (e) => {
        setData({
            ...data,
            proLang: e.target.value
        });
    };

    //Guardar el  rating
    const handleRating =(e)=>{
        setData({
            ...data,
            rating:e.target.value
        })
    }
    //Guardar la confirmacion de terminos y condiciones
    const handleCheckboxChange = (e) => {
        setData({
            ...data,
            checkbox: e.target.checked
        });
    };

    //Limpiar los datos
    const handleClear = () => {
        setData({
            name: '',
            surname: '',
            age: '',
            gender: '',
            proLang: '',
            rating: '',
            checkbox: false
        });
    };

    //Dialogo modal
    const [open, setOpen] = useState(false);

    //Cerrar el dialogo sin enviar datos
    const handleClose = () => {
        setOpen(false);
    };

    //Mostrar los datos en consola al confirmar
    const handleConfirm = () => {
        console.log(data);
        setOpen(false);
    };

    return (
        <>
        <Container className="container">
            <Box component='form' onSubmit={handleSubmit} sx={{width: '100%', maxWidth: '100%'}}>
                <Typography variant='h6' color={"#852222"} sx={{mb: 2, textAlign: 'center'}}>Ingrese sus
                    datos</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        {/*Nombre*/}
                        <TextField
                            required
                            label='Nombre'
                            variant='outlined'
                            fullWidth
                            value={data.name}
                            onChange={handleChangeName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/*Apellidos*/}
                        <TextField
                            required
                            label='Apellidos'
                            variant='outlined'
                            fullWidth
                            value={data.surname}
                            onChange={handleChangeSurname}
                        />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        {/*Edad*/}
                        <TextField
                            required
                            type='number'
                            label='Edad'
                            variant='outlined'
                            fullWidth
                            value={data.age}
                            onChange={handleChangeAge}
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={1} sx={{mt: 2}}>
                    <Grid item xs={12} sm={7}>
                        {/*Genero*/}
                        <FormControl fullWidth>
                            <FormLabel sx={{mb: 2, textAlign: 'center'}}>Género</FormLabel>
                            <RadioGroup row
                                        name="gender"
                                        value={data.gender}
                                        onChange={handleChangeGender}
                            >
                                <FormControlLabel required value="male" control={<Radio/>} label="Masculino"/>
                                <FormControlLabel required value="female" control={<Radio/>} label="Femenino"/>
                                <FormControlLabel required value="other" control={<Radio/>} label="Otro"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={5}>
                        {/*Lenguaje de programacion*/}
                        <FormControl required fullWidth>
                            <InputLabel id="demo-simple-select-label">Lenguaje de Programación Favorito</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={data.proLang}
                                onChange={handleChangeProLang}
                                variant="filled"
                            >
                                <MenuItem value={"Java"}>Java</MenuItem>
                                <MenuItem value={"Go"}>Go</MenuItem>
                                <MenuItem value={"C"}>C</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

                <Divider sx={{my: 4}}/>

                <Box sx={{mt: 2}}>
                    {/*Puntuacion*/}
                    <Typography variant="h6">Puntúa esta encuesta
                        <Rating name="survey-rating" defaultValue={2.5} precision={0.5} onChange={handleRating}/>
                    </Typography>

                </Box>

                {/*Terminos y condiciones*/}
                <FormControlLabel
                    control={<Checkbox checked={data.checkbox} onChange={handleCheckboxChange}/>}
                    label="He leído los términos y condiciones"
                />

                <Grid container spacing={2} justifyContent="flex-end" sx={{mt: 2}}>
                    <Grid item xs={12} sm={6}>
                        {/*Enviar*/}
                        <Button fullWidth
                                variant="contained"
                                endIcon={<SendIcon/>}
                                type="submit"
                                disabled={!data.checkbox} // Deshabilitar el botón si el checkbox no está marcado
                        >
                            Enviar
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        {/*Limpiar*/}
                        <Button fullWidth
                                variant="outlined"
                                color='secondary'
                                startIcon={<DeleteIcon/>}
                                onClick={handleClear} //Limpiar los datos
                        >
                            Limpiar
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            {/* Dialogo modal */}
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirmar"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Está seguro de mandar la encuesta?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        No
                    </Button>
                    <Button onClick={handleConfirm} color="primary" autoFocus>
                        Sí
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
        </>
    );
}

export default App;
