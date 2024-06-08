import React, { useState, useEffect } from 'react';
import { Stack, Box, Typography, Tabs, Tab } from '@mui/material';
import MenuBar from './menuBar';
import axios from 'axios';

const MenuList = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [menuData, setMenuData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        const fetchMenuData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.post('https://soal.staging.id/api/menu', {
                    show_all: 1
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (response.data.status === 'success') {
                    setMenuData(response.data.result.categories);
                } else {
                    setError('Failed to fetch menu data');
                }
            } catch (err) {
                setError('Failed to fetch menu data');
            } finally {
                setLoading(false);
            }
        };

        fetchMenuData();
    }, []);

    if (loading) {
        return <Typography>Loading...</Typography>;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>;
    }

    return (
        <>
            <Stack spacing={2}>
                <Box sx={{ boxShadow: '3px 4px #f5f5f5', background: '#fafafa', p: '1rem', pb: '0', textAlign: 'center' }}>
                    <Typography sx={{ mb: '1rem' }}>MENU</Typography>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        {menuData.map((category, index) => (
                            <Tab key={index} label={category.category_name} />
                        ))}
                    </Tabs>
                </Box>
                <Box sx={{ p: '1rem' }}>
                    {menuData.map((category, index) => (
                        activeTab === index && (
                            <Box key={index} sx={{ p: '1rem', boxShadow: '2px 2px #e0e0e0', background: '#fff' }}>
                                {category.menu.map((menuItem, menuIndex) => (
                                    <Stack direction='row' spacing={2} key={menuIndex} sx={{ mb: '1rem' }}>
                                        {menuItem.photo && <img src={menuItem.photo} alt={menuItem.name} style={{ width: '20%', height: '20%' }} />}
                                        <Box>
                                            <Typography sx={{ fontSize: '14px', fontWeight: 'bold', mb: '.5rem' }}>{menuItem.name}</Typography>
                                            <Typography sx={{ fontSize: '11px', color: '#757575' }} >{menuItem.description}</Typography>
                                        </Box>
                                        <Typography sx={{ fontWeight: 'bold' }}>{menuItem.price}</Typography>
                                    </Stack>
                                ))}
                            </Box>
                        )
                    ))}
                </Box>
            </Stack>
            <MenuBar />
        </>
    );
}

export default MenuList;