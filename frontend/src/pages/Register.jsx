import { Box, Button, TextField, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import axios from 'axios';
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
  
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!registerData.userName.trim() || 
        !registerData.emailId.trim() ||
        !registerData.mobileNumber.trim()||
        !registerData.password.trim()
      ){
      alert("please fill the required field");
    }
    try {
      const response = await axios.post("http://localhost:8080/api/users/register", registerData, {
        headers: { "Content-Type": "application/json" },
      });
  
      console.log("User registered successfully:", response.data);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed!");
    }
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
              required
            />
            <TextField
            id="email-input"
            name="emailId"
            label="Email"
            variant="outlined"
            value={registerData.emailId}
            onChange={handleChange}
            required
          />
            <TextField
              id="mobile-input"
              name="mobileNumber"
              label="Mobile"
              variant="outlined"
              value={registerData.mobileNumber}
              onChange={handleChange}
              required
            />
          <TextField
            id="password-input"
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={registerData.password}
            onChange={handleChange}
            required
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
