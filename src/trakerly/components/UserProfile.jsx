import { Avatar } from "@mui/material"
import { Box } from "@mui/system";
import { useSelector } from 'react-redux';

export const UserProfile = () => {
    const { photoURL } = useSelector( state => state.auth );
    console.log(photoURL)
    const handleClick = ( event )=>{
        event.stopPropagation();
        alert('Click')
    }

  return (
    <Box onClick = { handleClick }>
        <Avatar 
            sx={{ position:'relative', bottom:-190,  margin:2 }}
            src={ photoURL ? `${photoURL}`: '/broken-image.jpg' } 
            referrerPolicy='no-referrer'
        />
    </Box>
  )
}
