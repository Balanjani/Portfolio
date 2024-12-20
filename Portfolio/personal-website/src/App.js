import React, { Component } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';  // Correct imports for v5
import 'roboto-npm-webfont';
import './App.css';

import ResponsiveDrawer from './components/drawer/drawer';

// Create your theme (optional)
const theme = createTheme({
  // Customize your theme here if needed
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>  {/* Use ThemeProvider instead of MuiThemeProvider */}
        <ResponsiveDrawer />  {/* Your ResponsiveDrawer component */}
      </ThemeProvider>
    );
  }
}

export default App;
