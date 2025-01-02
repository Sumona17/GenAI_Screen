import { useSelector } from 'react-redux';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

// routing
import Routes from 'routes';

// defaultTheme
import themes from 'themes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';
import Login from './ScreenComponents/login'; // Import the Login component

// ==============================|| APP ||============================== //

const App = () => {
  const customization = useSelector((state) => state.customization);

  // State to track whether the user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Callback function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Set the login status to true when the user logs in
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes(customization)}>
        <CssBaseline />
        <NavigationScroll>
          {isLoggedIn ? (
            <Routes /> // Show Routes (Dashboard) if logged in
          ) : (
            <Login onLogin={handleLogin} /> // Show Login screen by default
          )}
    

        </NavigationScroll>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
