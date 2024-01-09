import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
  FormControl,
  InputLabel,
} from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container  className="log-cont" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '25px', marginTop: '25px' }}>
        <Typography variant="h5" gutterBottom>
          Login to Dashboard
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <FormControl fullWidth margin="normal">
            {/* <InputLabel htmlFor="email">Email</InputLabel> */}
            <TextField
              id="email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              placeholder="Email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl fullWidth margin="normal">
            {/* <InputLabel htmlFor="password">Password</InputLabel> */}
            <TextField
              id="password"
              type="password"
              variant="outlined"
              margin="normal"
              placeholder="Password"
              required
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Box mt={2}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
