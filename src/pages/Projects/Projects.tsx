import {Box, Button, Card, CardContent, CardMedia, Grid2 as Grid, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import jokeSite from './images/jokeSite.webp'
import telegram from './images/telegram.svg'
import uJokes from './images/uJokes.webp'
import {useEffect} from "react";
import {Helmet} from "react-helmet";

const projects = [
    {
        title: 'Joke-Bot',
        photo: telegram,
        description: `This code is a Python script for a Telegram bot. It utilizes the aiogram library for interacting with the Telegram Bot API and includes various functionalities for handling user interactions, sending jokes, managing bans, and more.`,
        github: 'https://github.com/Mak5er/Joke-Bot',
        demo: 'https://t.me/AnekdotyRobot',
    },
    {
        title: 'Multi-Bot',
        photo: telegram,
        description: `This project is a Telegram bot - multitool where users can perform various daily tasks. The bot is implemented using the Python programming language and uses the Aiogram framework to interact with the Telegram API.`,
        github: 'https://github.com/Mak5er/Multi-Bot',
        demo: 'https://t.me/MakserMultiBot',
    },
    {
        title: 'Downloader-Bot',
        photo: telegram,
        description: `A bot for downloading videos, photos, and audio from social networks. 📱 Currently available - TikTok, Instagram, YouTube, X(Twitter). Just send the bot a link. 🔗 The bot can also be added to the chat! 💬`,
        github: 'https://github.com/Mak5er/Downloader-Bot',
        demo: 'https://t.me/MaxLoadBot',
    },
    {
        title: 'Joke-Site',
        photo: jokeSite,
        description: `React and Flask API based site with Ukrainian jokes. This project consists of a React frontend and a Flask backend, designed to bring laughter to your day with a collection of ukrainian jokes🇺🇦`,
        github: 'https://github.com/Mak5er/joke-site-react',
        demo: 'https://anekdoty.pp.ua/',
    },
    {
        title: 'UJokes',
        photo: uJokes,
        description: `A website with jokes. It has features like user authentication, liking or disliking, dark and light themes, sharing jokes, and a history of read jokes.`,
        github: 'https://github.com/Mak5er/anekdoty',
        demo: 'https://ujokes.pp.ua/',
    },
];

const Projects = () => {
    const theme = useTheme();

    useEffect(() => {
        document.title = "Mak5er | My Projects";
    }, []);

    const maxContentHeight = Math.max(...projects.map(project => project.description.length));

    return (

        <Box
            sx={{
                color: theme.palette.text.primary,
                padding: theme.spacing(4),
                position: 'relative',
                paddingTop: '150px',
                paddingBottom: '50px'
            }}
        >
            <Helmet>
                <title>Mak5er | My Projects</title>
                <meta name="description"
                      content="Welcome to my project`s page. Explore my code, try demo and feel free."/>
            </Helmet>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                    marginBottom: theme.spacing(4),
                }}
            >
                My Recent <span style={{color: theme.palette.primary.main}}>Works</span>
            </Typography>
            <Grid container spacing={4} justifyContent="left">
                {projects.map((project, index) => (
                    <Grid size={{xs: 12, sm: 6, md: 3}} key={index} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Card
                            sx={{
                                width: '100%',
                                maxWidth: 370,
                                backgroundColor: theme.palette.background.paper,
                                boxShadow: `0 0 10px ${theme.palette.primary.main}`,
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: `0 0 20px ${theme.palette.primary.main}`,
                                },
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >

                            <CardMedia
                                component="img"
                                sx={{
                                    height: '200px',
                                    objectFit: 'contain',
                                    alignPhoto: 'center',
                                    borderRadius: '10px',
                                    padding: '10px'
                                }}
                                image={project.photo}
                                title={project.title}
                            />
                            <CardContent
                                sx={{
                                    minHeight: maxContentHeight,
                                }}
                            >
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.description}
                                </Typography>
                                <Box sx={{display: 'flex', gap: theme.spacing(2), marginTop: theme.spacing(2)}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={project.github}
                                    >
                                        GitHub
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        href={project.demo}
                                    >
                                        Try
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;