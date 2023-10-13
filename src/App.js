
import { ThemeProvider } from '@emotion/react';
import './App.css';
import { createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const theme = createTheme({

    components: {
        MuiFormLabel: {
            styleOverrides: {
                asterisk: { color: "red" },
            },
        },
    },

})


  return (
    <ThemeProvider theme={theme}>
      <ToastContainer/>
      <BrowserRouter>
       <Routes>
           <Route path="/login" element={<Login/>}/>
           <Route path="/" element={<Home/>}/>

       </Routes>
       </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
