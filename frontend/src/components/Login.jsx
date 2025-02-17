import { Box } from '@mui/material';
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react';
function Login() {
    const theme = createTheme({
        palette: {
            primary: {
              main: '#ffffff',
              dark: '#ffffff',
            },
        },
    })
  return (
    <div>
     <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 600,
          height: 400,
          marginTop:"10px",
          borderRadius: 5,
          border:"1px solid",
          borderColor:"#000000",
          textAlign:"center",
          bgcolor: 'primary.main',
          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="username" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="mobile" variant="outlined" />
        <br />
        <TextField id="outlined-basic" label="password" variant="outlined" />
        <br />
        <Button variant='contained'>Register</Button>
        </Box>
        <p>Already have an Account?
            <Typography 
            variant="h7" 
            gutterBottom 
            color='blue'
            > Login
            </Typography></p>
      </Box>
    </ThemeProvider>
    </div>
  )
}

export default Login
