import {Helmet} from "react-helmet";
import {Box, Container, Grid2 as Grid, IconButton, Typography} from '@mui/material';
import {FaGithub, FaInstagram, FaMousePointer, FaTwitter} from 'react-icons/fa';
import {RiTelegram2Fill} from "react-icons/ri";
import {useTheme} from '@mui/material/styles';

import Tilt from "react-parallax-tilt";
import avatar from '../../assets/avatar.svg';
import Toolstack from "./components/Toolstack";
import Techstack from "./components/Techstack";

import {useEffect} from "react";


const About = () => {
    const theme = useTheme();

    useEffect(() => {
        document.title = "Mak5er | About";
    }, []);

    return (
        <Container
            sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                pt: '30px',
                pb: '70px'
            }}>
            <Helmet>
                <title>Mak5er | About</title>
                <meta name="description"
                      content="Learn something about me. My programming skills, hobbies and tech/tool stacks."/>
            </Helmet>
            <Grid container spacing={2} alignItems="center" justifyContent="center"
                  sx={{position: 'relative', zIndex: 1, pt: {xs: '5rem', md: '9rem'}, pb: '20px'}}>
                <Grid size={{xs: 12, md: 8}}>
                    <Typography variant="h3" color="textPrimary" gutterBottom>
                        LET ME <Box component="span"
                                    sx={{color: 'primary.main', fontWeight: 'bold'}}>INTRODUCE</Box> MYSELF
                    </Typography>
                    <br/>
                    <br/>
                    <Typography variant="h6" color="textPrimary">
                        Hi Everyone, I am Maks from <Box component="span" sx={{color: 'primary.main'}}>Lviv,
                        Ukraine</Box>.
                    </Typography>
                    <br/>
                    <Typography variant="h6" color="textPrimary">
                        I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        I'm interested in building <Box component="span" sx={{color: 'primary.main'}}>Telegram
                        Bots</Box> and also in areas related to <Box component="span"
                                                                     sx={{color: 'primary.main'}}>Devops</Box>.
                    </Typography>
                    <Typography variant="h6" color="textPrimary">
                        Apart from coding, I like to
                    </Typography>
                    <ul className='hobbies'>
                        <li>
                            <Box component="span" sx={{color: 'primary.main'}}><FaMousePointer/> Play </Box>
                            games
                        </li>
                        <li>
                            <Box component="span" sx={{color: 'primary.main'}}><FaMousePointer/> Read </Box>
                            books
                        </li>
                        <li>
                            <Box component="span" sx={{color: 'primary.main'}}><FaMousePointer/> Fix </Box>
                            computers
                        </li>
                    </ul>
                </Grid>
                <Grid size={{xs: 12, md: 4}} style={{textAlign: 'center'}}>
                    <Tilt tiltReverse={true}>
                        <Box
                            component='img'
                            src={avatar}
                            alt="Profile"
                            fetchPriority='high'
                            style={{
                                width: 'auto',
                                maxHeight: '550px'
                            }}/>
                    </Tilt>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Box sx={{marginTop: '3rem'}}>
                        <Techstack/>
                    </Box>
                </Grid>
                <Grid size={{xs: 12}}>
                    <Box sx={{marginTop: '3rem'}}>
                        <Toolstack/>
                    </Box>
                </Grid>
                <Grid size={{xs: 12, md: 12}} style={{textAlign: 'center'}}>
                    <Box sx={{marginTop: '3rem'}}>
                        <Typography variant="h4" color="textPrimary" gutterBottom>
                            FIND ME <Box component='a' href="/links"
                                         sx={{color: 'primary.main', textDecoration: 'none'}}>ON</Box>
                        </Typography>
                        <Typography variant="h6" color="textPrimary">
                            Feel free to connect with me
                        </Typography>
                        <Box>
                            <IconButton aria-label="GitHub" href="https://github.com/Mak5er">
                                <FaGithub style={{ color: theme.palette.primary.main }}/>
                            </IconButton>
                            <IconButton aria-label="Twitter" href="https://x.com/Mak5er1">
                                <FaTwitter style={{ color: theme.palette.primary.main }}/>
                            </IconButton>
                            <IconButton aria-label="Telegram" href="https://t.me/mak5er">
                                <RiTelegram2Fill style={{ color: theme.palette.primary.main }}/>
                            </IconButton>
                            <IconButton aria-label="Instagram" href="https://www.instagram.com/mak5er/">
                                <FaInstagram style={{ color: theme.palette.primary.main }}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;