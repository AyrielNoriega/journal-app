import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal/thunks';
import { useDispatch } from 'react-redux';

export const JournalPage = () => {
    const dispatch = useDispatch();

    const onClickNewNote = () => {
        dispatch(startNewNote());
    };
    return (
        <JournalLayout>
            {/* JournalPage */}

            <NothingSelectedView />
            {/* <NoteView /> */}

            <IconButton
                onClick={ onClickNewNote }
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
            >
                <AddOutlined sx={{ fontSize: 30 }} />

            </IconButton>

        </JournalLayout>
    );
};
