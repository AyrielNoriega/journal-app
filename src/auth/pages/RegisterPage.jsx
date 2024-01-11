import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { Link as LinkRouterDom } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: '',
    displayName: ''
};

const formValidations = {
    email: [(value) => value.includes('@'), 'El correo debe de tener una @.'],
    password: [(value) => value.length >= 6, 'El password debe de tener mas de 6 letras.'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
};

export const RegisterPage = () => {
    const {
        displayName, email, password, onInputChange, formState,
        isFormValid, displayNameValid, emailValid, passwordValid
    } = useForm(formData, formValidations);

    const [formSubmited, setFormSubmited] = useState(false);

    const dispatch = useDispatch();

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmited(true);

        if (!isFormValid) return false;

        console.log('submit', formState);
        dispatch(startCreatingUserWithEmailPassword(formState));
    };

    return (
        <AuthLayout title="Register">
            <form onSubmit={ onSubmit }>
                <Grid container>
                    <Grid
                        item
                        xs={ 12 }
                        sx={{
                            mt: 1
                        }}
                    >
                        <TextField
                            label="Nombre completo"
                            type="text"
                            placeholder="Nombre completo"
                            fullWidth
                            name="displayName"
                            value={ displayName }
                            onChange={ onInputChange }
                            error={ !!displayNameValid && formSubmited }
                            helperText={ displayNameValid }
                        />
                    </Grid>
                    <Grid
                        item
                        xs={ 12 }
                        sx={{
                            mt: 1
                        }}
                    >
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name="email"
                            value={ email }
                            onChange={ onInputChange }
                            error={ !!emailValid && formSubmited }
                            helperText={ emailValid }
                        />
                    </Grid>

                    <Grid
                        item
                        xs={ 12 }
                        sx={{
                            mt: 1
                        }}
                    >
                        <TextField
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name="password"
                            value={ password }
                            onChange={ onInputChange }
                            error={ !!passwordValid && formSubmited }
                            helperText={ passwordValid }
                        />
                    </Grid>

                    <Grid
                        container
                        spacing={ 2 }
                        sx={{
                            mb: 2,
                            mt: 1
                        }}
                    >
                        <Grid
                            item
                            xs={ 12 }
                            sm={ 12 }
                        >
                            <Button
                                disabled={ !!isCheckingAuthentication }
                                variant="contained"
                                fullWidth
                                type='submit'
                            >
                                Crear cuenta
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={ 12 }
                            sm={ 12 }
                            display={ errorMessage ? '' : 'none' }
                        >
                            <Alert severity="error" >
                                { errorMessage }
                            </Alert>
                        </Grid>

                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                    >
                        <Typography sx={{ mr: 1 }}>¿Ya tiene  una cuenta ?</Typography>
                        <Link
                            component={ LinkRouterDom }
                            color="inherit"
                            to="/auth/login"
                        >
                            Ingresar
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
