import { useSelector, useDispatch } from "react-redux";
import { Avatar, Box, Button, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Person, ContactMail, Settings, Logout } from '@mui/icons-material';
import { TrakerlyLayout } from "../layout/TrakerlyLayout";
import { UserLogOut } from "../../appStore/Thunks/authThunks";

export const MyAccount = () => {
    const { displayName, email, photoURL } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const onLogOut  = ()=>{
        dispatch( UserLogOut() );
    }

    return (
        <TrakerlyLayout>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "auto",
                }}
            >
                <Avatar
                    src={photoURL ? `${photoURL}` : "/broken-image.jpg"}
                    referrerPolicy="no-referrer"
                    sx={{
                        margin: 2,
                        width: "150px",
                        height: "150px",
                    }}
                />

                <List sx={{ color: 'primary.main' }}>
                    <ListItem >
                        <ListItemIcon sx={{ color: 'primary.main' }}>
                            <Person />
                        </ListItemIcon>
                        <ListItemText primary='Your name:' secondary={displayName} />
                    </ListItem>

                    <ListItem>
                        <ListItemIcon sx={{ color: 'primary.main' }}>
                            <ContactMail />
                        </ListItemIcon>
                        <ListItemText primary='Your email:' secondary={email} />
                    </ListItem>

                </List>

                <Grid spacing={2} sx={{ display:'flex', my:2, ml:{ xs: 6 } }}>
                    <Grid item xs={12} sm={6} mx={2}>
                        <Button
                            variant="contained"
                            sx={{ backgroundColor: 'primary.main' }}
                        >
                            <IconButton>
                                <Settings fontSize="small" sx={{ color: 'secondary.main' }}/>
                            </IconButton>
                            <Typography>Settings</Typography>
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={6} >
                    <Button
                            onClick={ onLogOut }
                            variant="contained"
                            sx={{ backgroundColor: 'primary.main' }}
                    >
                            <IconButton>
                                <Logout fontSize="small" sx={{ color: 'secondary.main' }}/>
                            </IconButton>
                            <Typography>Logout</Typography>
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        </TrakerlyLayout>
    );
};
