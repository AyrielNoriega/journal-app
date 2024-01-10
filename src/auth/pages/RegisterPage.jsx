import { Link as LinkRouterDom } from 'react-router-dom';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';

const formData = {
    email: 'ayriel@gmail.com',
    password: '123456',
    displayName: 'ayriel noriega'
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

    console.log(displayNameValid);
    const onSubmit = (e) => {
        e.preventDefault();

        console.log('submit', formState);
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
                                variant="contained"
                                fullWidth
                                type='submit'
                            >
                                Crear cuenta
                            </Button>
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
