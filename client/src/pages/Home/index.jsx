import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';
import { AppBar, Footer, Header } from '../../components';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function HomePage() {

    return (
        <>
            <AppBar />
            <main>
                <Header />
                <Container sx={{ py: 8 }} maxWidth="lg">
                    <Grid container spacing={2}>
                        {cards.map((card) => (<React.Fragment key={card} >
                            <CardItem card={card} />
                        </React.Fragment>
                        ))}
                    </Grid>
                </Container>
                <Footer />
            </main>
        </>
    );
}


const CardItem = ({ card }) => (<Grid item key={card} xs={12} sm={6} md={4}>
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <CardMedia component="div" sx={{ pt: '56.25%', }}
            image="https://source.unsplash.com/random?wallpapers"
        />
        <CardContent sx={{ flexGrow: 1 }}>
            <Typography align='left' gutterBottom variant="h5" component="h2">
                juc
            </Typography>
            <Typography align='left' variant="body2">
                This is a media card. You can use this section to describe the
                content.
            </Typography>
        </CardContent>
        <CardActions>
            <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" alignItems="center">
                <span>
                    <Typography align='left' variant="body2" >
                        M.R.P :
                    </Typography>
                    <Typography align='left' gutterBottom variant="h5" component="h1">
                        <strong style={{ textDecorationLine: 'line-through', color: 'red' }}>150/-</strong>
                        <strong  >120/-</strong>
                    </Typography>
                </span>

                <Button variant='contained' color='primary' size="small">Order Now</Button>
            </Box>
        </CardActions>
    </Card>
</Grid>)