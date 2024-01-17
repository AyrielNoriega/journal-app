import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { ImageGallery } from '../components';
import { useForm } from '../../hooks/useForm';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

export const NoteView = () => {
    const { active: note } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);
    console.log(note, { body, title });
    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date]);

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                mb: 1
            }}
        >
            <Grid
                item
            >
                <Typography fontSize={ 39 } fontWeight="light">{ dateString }</Typography>
            </Grid>
            <Grid
                item
            >
                <Button>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    <Typography>Guardar</Typography>
                </Button>
            </Grid>

            <Grid
                container
            >
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    placeholder='Ingrese el título'
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={ title }
                    onChange={ onInputChange }
                />
                <TextField
                    type='text'
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder='¿Qué sucedió hoy?'
                    minRows={ 5 }
                    sx={{ border: 'none', mb: 1 }}
                    name='body'
                    value={ body }
                    onChange={ onInputChange }
                />
            </Grid>

            <ImageGallery />
        </Grid>
    );
};
