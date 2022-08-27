import { Avatar } from "@mui/material"
import { Box } from "@mui/system";
import { useSelector } from 'react-redux';

export const UserProfile = () => {
  const { photoURL } = useSelector(state => state.auth);

  const handleClick = (event) => {
    event.stopPropagation();
    alert('Click')
  }

  return (
    <Box
      onClick={handleClick}
      sx={{ position: 'relative', bottom: -190, margin: 2 }}
    >
      <Avatar
        src={photoURL ? `${photoURL}` : '/broken-image.jpg'}
        referrerPolicy='no-referrer'
      />
    </Box>
  )
}
