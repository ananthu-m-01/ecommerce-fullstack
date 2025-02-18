import { Box } from '@mui/material';
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
function Login() {
    const [login,setLogin] = useState(false);
    const toggleLogin = () =>{
      setLogin(!login)
    }
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
        {login?<></>:<TextField id="outlined-basic" label="username" variant="outlined" />}
        <br />
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <br />
        {login?<></>:<TextField id="outlined-basic" label="mobile" variant="outlined" />}
        <br />
        <TextField id="outlined-basic" label="password" variant="outlined" />
        <br />
        {
          login?<Button variant='contained'>Login</Button>:<Button variant='contained'>Register</Button>
        }
        </Box>
        <p>Already have an Account?
            <Typography 
            variant="h7" 
            gutterBottom 
            color='blue'
            onClick={toggleLogin}
            sx={{
              cursor:"pointer"
            }}
            > 
            {
              login?<>Register</>:<>Login   </>
            }
            </Typography></p>
      </Box>
    </ThemeProvider>
    </div>
  )
}

export default Login
