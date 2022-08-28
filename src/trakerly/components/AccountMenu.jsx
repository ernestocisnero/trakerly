import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Avatar, Menu, MenuItem, ListItemIcon, Divider, IconButton, Tooltip } from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import { UserLogOut } from '../../appStore/Thunks/authThunks';

export function AccountMenu() {
    const { photoURL } = useSelector(state => state.auth);
    const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogOut  = ()=>{
        dispatch( UserLogOut() );
    }

    const handleClickMyAccount = ( event )=>{
        event.preventDefault();
        navigate('../myaccount');
    }

    return (
        <>
            <Box sx={{ position: 'relative', bottom: -190 }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ ml: 2 }}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar 
                            src={photoURL ? `${photoURL}` : '/broken-image.jpg'} 
                            referrerPolicy='no-referrer'
                        />
                    </IconButton>
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={ handleClickMyAccount }>
                    <Avatar 
                        src={photoURL ? `${photoURL}` : '/broken-image.jpg'}
                        referrerPolicy='no-referrer'
                        /> My account
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Settings fontSize="small" sx={{ color: 'primary.main' }}/>
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={ onLogOut }>
                    <ListItemIcon>
                        <Logout fontSize="small" sx={{ color: 'primary.main' }}/>
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
}
