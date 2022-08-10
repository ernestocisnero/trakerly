
import { AppRouter } from './appRouter/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={ theme }>
        <CssBaseline />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
