import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { MoveToInbox } from '@mui/icons-material';
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
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MoveToInbox />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MoveToInbox />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MoveToInbox />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <MoveToInbox />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>

            <UserProfile />
        </Drawer>
    )
}
