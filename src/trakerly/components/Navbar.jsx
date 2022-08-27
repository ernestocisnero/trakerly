import { useNavigate } from "react-router-dom";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon } from "@mui/material"
import { Window, AddCircleOutline, RemoveCircleOutline, CalendarMonth } from '@mui/icons-material';

import { UserProfile } from "./UserProfile";


const drawerWidth = 80;

export const Navbar = () => {

    let navigate = useNavigate();

    const handleClick = (event, id)=>{
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
                    backgroundColor:'primary.main'
                }
                
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <Window id='overview' sx={{ color:'secondary.main' }} onClick={ (event) => handleClick( event, 'overview' ) }/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <AddCircleOutline id='addIncome' sx={{ color:'secondary.main' }} onClick={ (event) => handleClick( event, 'addIncome' ) }/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <RemoveCircleOutline id='addOutcome' sx={{ color:'secondary.main' }} onClick={ (event) => handleClick( event, 'addOutcome' ) }/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding sx={{ my:5 }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <CalendarMonth id='monthlyView' sx={{ color:'secondary.main' }} onClick={ (event) => handleClick( event, 'monthlyView' ) }/>
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>

            <UserProfile />
        </Drawer>
    )
}
