import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';
import { setActiveNote } from '../../store/journal';
import { useDispatch } from 'react-redux';

export const SideBarItem = ({ id, title, body, date, imageUrls = [] }) => {
    const dispatch = useDispatch();
    const onActiveNote = () => {
        console.log('act');
        dispatch(setActiveNote({ id, title, body, date, imageUrls }));
    };

    return (
        <ListItem disablePadding>
            <ListItemButton onClick={ onActiveNote }>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid
                    container
                >
                    <ListItemText primary={ title } />
                    <ListItemText secondary={ body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
