import {useEffect} from "react";

import {Box, Button, Container, Grid2 as Grid, Toolbar, Typography} from '@mui/material';
import {HouseOutlined, PersonOutline, TerminalOutlined} from '@mui/icons-material';
import Typing from "./components/Typing";
import {Link} from 'react-router-dom';

import homeImage from '../../assets/home-image.webp';
import {Helmet} from "react-helmet";

const Home = () => {


    useEffect(() => {
        document.title = "Mak5er";
    }, []);


    return (
        <Container
            sx={{
                display: 'flex',
                alignItems: 'stretch',
                pt: '30px',
                pb: '30px',
                position: 'relative',
                flexDirection: 'column',
            }}
        >
            <Helmet>
                <title>Mak5er</title>
                <meta name="description"
                      content="Welcome to my site! I'm Maks, a programmer interested in building Telegram bots, WebDev and DevOps. Here, you'll learn more about me. Connect with me on GitHub, Twitter, Telegram, and Instagram, and let's build something amazing together!"/>
                <meta name="keywords"
                      content="Mak5er, Makser, Maksym, Reva, Maksym Reva, portfolio, Telegram bots, DevOps, React, programming, developer, projects, web development, Telegram bot development, aiogramvite"/>
                <meta name="keywords" lang="uk"
                      content="Mak5er, Makser, Maksym, Reva, Maksym Reva, портфоліо, Telegram боти, DevOps, React, програмування, розробник, проекти, веб-розробка, розробка Telegram ботів, aiogram, аіограм"/>
            </Helmet>
            <Grid container spacing={2} alignItems="center" justifyContent="center"
                  sx={{position: 'relative', zIndex: 1, pt: {xs: '5rem', md: '9rem'}, pb: '2rem', minHeight: '600px'}}>

                <Grid size={{xs: 12, md: 6}} component='div' sx={{textAlign: 'left', position: 'relative'}}>
                    <Typography variant="h2" color="textPrimary" gutterBottom>
                        Hi There! 👋
                    </Typography>
                    <Typography variant="h2" color="textPrimary" gutterBottom>
                        I'M <Box component="span" sx={{color: 'primary.main', fontWeight: 'bold'}}>MAKSYM REVA</Box>
                    </Typography>
                    <Typography component="span" color="primary.main" gutterBottom>
                        <Typing/>
                    </Typography>
                    <Toolbar>
                        <Button variant="text" sx={{color: 'primary.main', borderColor: 'primary.main'}}
                                component={Link}
                                to="/" startIcon={<HouseOutlined/>}>Home</Button>
                        <Button variant="text" sx={{color: 'primary.main', borderColor: 'primary.main', ml: 2}}
                                component={Link}
                                to="/about" startIcon={<PersonOutline/>}>About</Button>
                        <Button variant="text" sx={{color: 'primary.main', borderColor: 'primary.main', ml: 2}}
                                component={Link}
                                to="/projects" startIcon={<TerminalOutlined/>}>Projects</Button>
                    </Toolbar>
                </Grid>
                <Grid size={{xs: 12, md: 6}} component='div'
                      sx={{justifyContent: 'flex-end', display: 'flex', position: 'relative'}}>
                    <Box
                        component="img"
                        src={homeImage}
                        alt="Illustration"
                        fetchPriority="high"
                        sx={{
                            height: '100%',
                            width: '100%',
                            maxHeight: '500px',
                            objectFit: 'contain',
                            borderRadius: 2,
                            display: 'block',
                        }}
                    />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Home;