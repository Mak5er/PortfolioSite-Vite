import { Box, Button, Typography, Container, Grid2 as Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet';
import { FaGithub, FaTwitter, FaInstagram, FaFirefoxBrowser  } from 'react-icons/fa';
import { RiTelegram2Fill, RiThreadsLine  } from "react-icons/ri";
import { useEffect } from "react";

const socialLinks = [
    { name: 'Telegram', icon: <RiTelegram2Fill />, url: 'https://t.me/mak5er' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/mak5er' },
    { name: 'Threads', icon: <RiThreadsLine />, url: 'https://www.threads.com/mak5er' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com/mak5er' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/Mak5er' },
    { name: 'Website', icon: <FaFirefoxBrowser />, url: 'https://mak5er.com' },

];

const Links = () => {
    const theme = useTheme();

    useEffect(() => {
        document.title = "Mak5er | Links";
    }, []);

    return (
        <Container
            sx={{
                color: theme.palette.text.primary,
                position: 'relative',
                pt: '30px',
                pb: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Helmet>
                <title>Mak5er | Links</title>
                <meta name="description" content="Find me on different social media platforms." />
            </Helmet>
            <Box>
                <Typography variant="h3" align="center" gutterBottom sx={{ pb: '10px', pt: '3rem' }}>
                    Find Me <span style={{ color: theme.palette.primary.main }}>On</span>
                </Typography>
            </Box>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                {socialLinks.map((link, index) => (
                    <Grid size={{ xs: 8 }} key={index}>
                        <Button
                            variant="outlined"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                width: '100%',
                                height: '50px',
                                position: 'relative',
                                fontSize: '1.2rem',
                                textTransform: 'none',
                                color: theme.palette.text.primary,
                                backgroundColor: theme.palette.background.paper,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: `0 0 5px ${theme.palette.primary.main}`,
                                transition: 'box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    boxShadow: `0 0 15px ${theme.palette.primary.main}`,
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: '16px',
                                    color: theme.palette.primary.main,
                                    fontSize: '1.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                {link.icon}
                            </Box>
                            {link.name}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Links;
