import { Avatar } from "@mui/material"
import { Box, Stack } from "@mui/system";
import { useSelector } from 'react-redux';

export const UserProfile = () => {
    const { photoURL } = useSelector( state => state.auth );
    
    const handleClick = ( event )=>{
        event.stopPropagation();
        alert('Click')
    }

  return (
    <Box onClick = { handleClick }>
        <Avatar 
            sx={{ position:'relative', bottom:-380,  margin:2 }}
            src={ photoURL ? `${photoURL}`: '/broken-image.jpg' } 
        />
    </Box>
  )
}
