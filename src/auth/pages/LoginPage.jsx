import { Link as LinkRouterDom } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Google } from '@mui/icons-material';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material';

import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

const initialForm = {
    email: '',
    password: ''
};

export const LoginPage = () => {
    const { email, password, onInputChange } = useForm(initialForm);

    const { status, errorMessage } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(startLoginWithEmailPassword(email, password));
    };

    const onGoogleSignIn = (e) => {
        e.preventDefault();

        console.log('onGoogleSignIn');
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Login">
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
                            autoComplete="username"
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name='email'
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
                            autoComplete="current-password"
                            label="Contraseña"
                            type="password"
                            placeholder="Contraseña"
                            fullWidth
                            name='password'
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
                            sm={ 6 }
                        >
                            <Button
                                disabled={ isAuthenticating }
                                variant="contained"
                                fullWidth
                                type='submit'
                            >
                                    Login
                            </Button>
                        </Grid>
                        <Grid
                            item
                            xs={ 12 }
                            sm={ 6 }
                        >
                            <Button
                                disabled={ isAuthenticating }
                                variant="contained"
                                fullWidth
                                onClick={ onGoogleSignIn }
                            >
                                <Google />
                                <Typography
                                    sx={{
                                        ml: 1
                                    }}
                                >
                                        Google
                                </Typography>
                            </Button>
                        </Grid>

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

                    <Grid
                        container
                        direction="row"
                        justifyContent="end"
                    >
                        <Link
                            component={ LinkRouterDom }
                            color="inherit"
                            to="/auth/register"
                        >
                                Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
