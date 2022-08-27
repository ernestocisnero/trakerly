import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { Window, AddCircleOutline, RemoveCircleOutline, CalendarMonth } from '@mui/icons-material';

import { UserProfile } from "./UserProfile";


const drawerWidth = 80;

export const Navbar = () => {
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 1,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Window />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddCircleOutline />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <RemoveCircleOutline />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <CalendarMonth />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>

            <UserProfile />
        </Drawer>
    )
}
