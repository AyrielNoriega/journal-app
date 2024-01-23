import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, IconButton } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { setActiveNote, startSaveNote } from '../../store/journal';
import { ImageGallery } from '../components';

export const NoteView = () => {
    const dispatch = useDispatch();
    const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date]);

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);

    const onSaveNote = () => {
        dispatch(startSaveNote());
    };

    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Nota actualizada', messageSaved, 'success');
        }
    }, [messageSaved]);

    const fileInputRef = useRef();

    const onFileInputChange = () => {
        console.log('enviando...');
    };

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
                <input
                    type="file"
                    multiple
                    ref={ fileInputRef }
                    onChange={ onFileInputChange }
                    style={{ display: 'none' }}
                />

                <IconButton
                    color="primary"
                    disabled={ isSaving }
                    onClick={ () => fileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button
                    disabled={ isSaving }
                    onClick={ onSaveNote }
                >
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
