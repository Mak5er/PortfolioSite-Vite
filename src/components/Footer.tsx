import {Box, Grid2 as Grid, IconButton, Typography} from '@mui/material';
import {GitHub, Instagram, Telegram, Twitter} from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            marginTop='1rem'
            width='100%'
            minHeight="2vh"
            sx={{backgroundColor: 'footer.main', position: 'relative'}}
        >
            <Grid container alignItems="center" justifyContent="center"
                  style={{position: 'relative', zIndex: 1}}>
                <Grid size={{md: 4, xs: 12}} textAlign='center'>
                    <Typography variant="body1">
                        Designed and Developed by <a href='https://github.com/Mak5er'
                                                     style={{color: 'inherit', textDecoration: 'none'}}>Maksym Reva</a>
                    </Typography>
                </Grid>
                <Grid size={{md: 4, xs: 12}}>
                    <Typography variant="body2" color="textSecondary" align="center" sx={{mt: 1}}>
                        {'Copyright © '}
                        <a href="https://makser.pp.ua" style={{color: 'inherit', textDecoration: 'none'}}>
                            Mak5er
                        </a>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Grid>
                <Grid size={{md: 4, xs: 12}} textAlign='center'>
                    <Box sx={{display: 'flex', justifyContent: 'center', mt: 1}}>
                        <IconButton aria-label="GitHub" href="https://github.com/Mak5er">
                            <GitHub/>
                        </IconButton>
                        <IconButton aria-label="Twitter" href="https://x.com/Mak5er1">
                            <Twitter/>
                        </IconButton>
                        <IconButton aria-label="Telegram" href="https://t.me/mak5er">
                            <Telegram/>
                        </IconButton>
                        <IconButton aria-label="Instagram" href="https://www.instagram.com/mak5er/">
                            <Instagram/>
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;