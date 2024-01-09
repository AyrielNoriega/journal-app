import { Link as LinkRouterDom } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, Link, TextField, Typography } from '@mui/material';

export const LoginPage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: '100vh',
                backgroundColor: 'primary.main',
                padding: 4
            }}
        >
            <Grid
                item
                className='box-shadow'
                xs={ 3 }
                sx={{
                    backgroundColor: 'white',
                    padding: 3,
                    borderRadius: 2
                }}
            >
                <Typography
                    variant='h5'
                    sx={{
                        mb: 1
                    }}
                >
                    Login
                </Typography>

                <form>
                    <Grid container>
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
                                <Button variant="contained" fullWidth>
                                    Login
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={ 12 }
                                sm={ 6 }
                            >
                                <Button variant="contained" fullWidth>
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
            </Grid>
        </Grid>
    );
};