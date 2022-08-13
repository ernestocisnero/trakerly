import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  custom1: {
    main: '#8D8CC0',
  },
  custom2: {
    main: '#F9C6B8',
  },
  custom3: {
    main: '#0F0B15',
  },

  palette: {
    primary: {
      main: '#8D8CC0',
    },
    secondary: {
      main: '#F9A7ED',
    },
    error: {
      main: red.A400,
    },
    warning:{
      main: '#DD4831'
    }
  },
});

export default theme;