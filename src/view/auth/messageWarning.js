import React from 'react';
import { Stack, Alert, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const MessageWarning = () => {
  return (
    <Stack spacing={2}>
        <Alert severity="warning" sx={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
            Silakan buka melalui mobile web view
            <Typography>Inspect <ArrowForwardIosIcon sx={{ fontSize: '12px'}} /> CTRL+Shift+M <ArrowForwardIosIcon sx={{ fontSize: '12px'}} /> Pilih Dimension Mobile</Typography>
        </Alert>
    </Stack>
  )
}

export default MessageWarning