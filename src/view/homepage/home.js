import React, { useEffect, useState } from 'react';
import { Stack, Box, Typography, IconButton, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Slider from "react-slick";
import ClientLogo from '../../assets/img/logo.png';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuBar from './menuBar'

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://soal.staging.id/api/home', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setData(response.data.result);
            } catch (err) {
                setError('Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        customPaging: i => (
            <div className='if-active'
            style={{
                position: "relative",
                display: "inline-block",
                width: "15px",
                height: "15px",
                margin: "0 5px",
                padding: "0",
                borderRadius: "50%",
                backgroundColor: "#D9D9D9"
            }}
            >
            </div>
        ),
    };
    return (
        <>
            <Stack spacing={2}>
                <Box sx={{ boxShadow: '3px 4px #f5f5f5', width: '100%', background: '#fafafa' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems='center' sx={{ margin: "0 1rem", padding: '.25rem 0' }}>
                        <img src={ClientLogo} alt="Logo" style={{ width: '27%' }} />
                        <IconButton aria-label="delete" size="small"  onClick={handleLogout}>
                            <LogoutIcon fontSize="inherit" />
                        </IconButton>
                    </Stack>
                </Box>
                {data ? (
                <>
                    <Box sx={{ padding: '1.5rem' }}>
                        <Box sx={{ background: '#fff', padding: '1.5rem', borderRadius: '20px' }}>
                            <Typography sx={{ fontWeight: '500' }}>{data.greeting},</Typography>
                            <Typography variant='h6'>{data.name}</Typography>
                            <Stack direction='row' spacing={3} sx={{ width: '100%', mt: '1rem' }}>
                                <Box sx={{ borderRight: '1px solid #eee', paddingRight: '1rem' }}>
                                    {data.qrcode && <img src={data.qrcode} alt="QR Code" />}
                                </Box>
                                <Box>
                                    <Typography variant="body1">Saldo</Typography>
                                    <Typography variant="body1">Points</Typography>
                                </Box>
                                <Box sx={{ marginLeft: 'auto!important' }}>
                                    <Typography sx={{ fontWeight: 'bold' }}>Rp. {data.saldo}</Typography>
                                    <Typography sx={{ color: '#00c853', textAlign: 'right' }}>{data.point}</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                    <Box>
                        {data?.banner && data.banner.length > 0 && (
                        <Slider {...settings}>
                            {data.banner.map((url, index) => (
                            <Box direction='row'>
                                <div key={index}>
                                    <img src={url} alt={`Banner ${index}`} style={{ width: '100%' }} />
                                </div>
                            </Box>
                            ))}
                        </Slider>
                        )}
                    </Box>
                </>
                ) : (
                    <Typography>Akun Tidak Ditemukan</Typography>
                )}
            </Stack>
            <MenuBar />
        </>
    );
};

export default Home;
