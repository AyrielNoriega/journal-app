import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { TurnedInNot } from '@mui/icons-material';

export const SideBarItem = ({ note }) => {
    return (
        <ListItem disablePadding>
            <ListItemButton>
                <ListItemIcon>
                    <TurnedInNot />
                </ListItemIcon>
                <Grid
                    container
                >
                    <ListItemText primary={ note.title } />
                    <ListItemText secondary={ note.body } />
                </Grid>
            </ListItemButton>
        </ListItem>
    );
};
