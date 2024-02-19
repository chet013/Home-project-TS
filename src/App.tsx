import React from 'react';
import { Header } from './componets/Header/Header';
import { Main } from './componets/Main/Main'
import Box from '@mui/material/Box';

function App() {
  return (
    <Box style={{ backgroundColor: 'lightgrey', height: '100vh' }}>
      <Header />
      <Main />
    </Box>

  );
}

export default App;
