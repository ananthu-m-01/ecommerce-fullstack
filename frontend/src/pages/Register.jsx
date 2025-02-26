import { Box, Button, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [registerData, setRegisterData] = useState({
    userName: "",
    emailId: "",
    mobileNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("User input Data:", registerData);
  };
  
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
        dark: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: 600,
          height: 400,
          marginTop: "10px",
          borderRadius: 5,
          border: "1px solid",
          borderColor: "#000000",
          textAlign: "center",
          bgcolor: 'primary.main',
          '&:hover': { bgcolor: 'primary.dark' },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: 'auto',
        }}
      >
        <Box
          component="form"
          sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
          noValidate
          autoComplete="off"
          onSubmit={handleRegister}
        >
            <TextField
              id="username-input"
              name="userName"
              label="Username"
              variant="outlined"
              value={registerData.userName}
              onChange={handleChange}
            />
            <TextField
            id="email-input"
            name="emailId"
            label="Email"
            variant="outlined"
            value={registerData.emailId}
            onChange={handleChange}
          />
            <TextField
              id="mobile-input"
              name="mobileNumber"
              label="Mobile"
              variant="outlined"
              value={registerData.mobileNumber}
              onChange={handleChange}
            />
          <TextField
            id="password-input"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={registerData.password}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained">
            Register
          </Button>
          <Typography variant="body2">
            Already have an account <Link to='/login'>Login</Link>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Register;
