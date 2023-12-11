import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import MainThemes from './Theme.ts';
import { BrowserRouter } from 'react-router-dom';


const theme = createTheme(MainThemes);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
