import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { MoveToInbox } from '@mui/icons-material';


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
                <List sx={{ display: 'flex', flexDirection: 'column', alignContent: 'end' }}>
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
            </Drawer>
  )
}
