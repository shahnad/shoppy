import React from 'react'
import { Box, Typography, Container, Button, Stack } from '@mui/material';

export const Header = () => {
    return (
        <div>  <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6, }} >
            <Container maxWidth="lg">
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Album layout
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" paragraph>
                    Something short and leading about the collection below—its contents,
                    the creator, etc. Make it short and sweet, but not too short so folks
                    don&apos;t simply skip over it entirely.
                </Typography>
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button variant="contained">Main call to action</Button>
                    <Button variant="outlined">Secondary action</Button>
                </Stack>
            </Container>
        </Box></div>
    )
}
