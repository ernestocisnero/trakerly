import { useNavigate } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, Tooltip } from "@mui/material"
import { Window, AddCircleOutline, RemoveCircleOutline, CalendarMonth } from '@mui/icons-material';

import { AccountMenu } from "./AccountMenu";


const drawerWidth = 80;

export const Navbar = () => {

    let navigate = useNavigate();

    const handleClick = (event, id) => {
        event.preventDefault();

        const idIcon = id;

        switch (idIcon) {
            case 'overview':
                navigate("../overview");
                break;

            case 'addIncome':
                navigate("../addIncome");
                break;
            case 'addOutcome':
                navigate("../addOutcome");
                break;
            case 'monthlyView':
                navigate("../monthlyView");
                break;

            default:
                break;
        }
    }

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 1,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: 'primary.main'
                }

            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                <Tooltip title='Overview'>
                    <ListItem disablePadding sx={{ my: 5 }} onClick={(event) => handleClick(event, 'overview')}>
                        <ListItemButton>
                            <ListItemIcon>
                                <Window sx={{ color: 'secondary.main' }} />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListItem>
                </Tooltip>

                <Tooltip title='Add Income'>
                <ListItem disablePadding sx={{ my: 5 }} onClick={(event) => handleClick(event, 'addIncome')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddCircleOutline sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </Tooltip>

                <Tooltip title='Add Outcome'>
                <ListItem disablePadding sx={{ my: 5 }} onClick={(event) => handleClick(event, 'addOutcome')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <RemoveCircleOutline sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </Tooltip>

                <Tooltip title='Monthly view'>
                <ListItem disablePadding sx={{ my: 5 }} onClick={(event) => handleClick(event, 'monthlyView')}>
                    <ListItemButton>
                        <ListItemIcon>
                            <CalendarMonth sx={{ color: 'secondary.main' }} />
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
                </Tooltip>
            </List>

            <AccountMenu />
        </Drawer>
    )
}
