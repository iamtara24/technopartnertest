import React, { useState } from 'react';
import { Box, Stack, Typography, TextField, Button, Alert } from '@mui/material';
import ClientLogo from '../../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Email and Password are required');
            return;
        }

        try {
            const response = await axios.post('https://soal.staging.id/oauth/token', {
                grant_type: 'password',
                client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
                client_id: 'e78869f77986684a',
                username: email,
                password: password
            });

            const { access_token } = response.data;
            localStorage.setItem('token', access_token); // Simpan token di localStorage
            navigate('/home');
        } catch (err) {
            setError('Login failed. Please check your credentials and try again.');
        }
    };
    return (
        <Stack
            spacing={10} 
            justifyContent="center"
            alignItems="center"
            sx={{height: '97vh', background: '#eeeeee'}}
        >
            <img src={ClientLogo} alt="Logo" style={{ width: '77%', marginBottom: '20px', margin: '0 auto' }} />
            <Stack spacing={2} component="form" onSubmit={handleSubmit}>
                {error && <Alert severity="error">{error}</Alert>}
                <Box sx={{ textAlign: 'center'}}>
                    <Typography sx={{color: '#bdbdbd'}}>Email</Typography>
                    <TextField
                        hiddenLabel
                        required
                        id="email"
                        size="small"
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            sx: { bgcolor: '#fafafa' } // Menentukan warna background
                        }}
                    />
                </Box>
                <Box sx={{ textAlign: 'center'}}>
                    <Typography sx={{color: '#bdbdbd'}}>Password</Typography>
                    <TextField
                        hiddenLabel
                        required
                        id="password"
                        size="small"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            sx: { bgcolor: '#fafafa' } // Menentukan warna background
                        }}
                    />
                </Box>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: "40px !important", mb: 2, background: "#fafafa", padding: ".25rem 3rem", color:"black" }}
                >
                    Login
                </Button>
            </Stack>
        </Stack>
    );
};

export default Login;