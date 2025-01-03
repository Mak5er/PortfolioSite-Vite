import {Box, Grid2 as Grid, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import projectsData from './projects.json';
import ProjectCard from './components/ProjectCard';


const Projects = () => {
    const theme = useTheme();
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        setProjects(projectsData);
        document.title = "Mak5er | My Projects";
    }, []);


    const maxContentHeight = Math.max(...projects.map(project => project.description.length));

    return (

        <Box
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
                <title>Mak5er | My Projects</title>
                <meta name="description"
                      content="Welcome to my project`s page. Explore my code, try demo and feel free to fork and contribute."/>
            </Helmet>
            <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                    pb: '20px',
                    pt: {xs: '5rem', md: '9rem'}
                }}
            >
                My Recent <span style={{color: theme.palette.primary.main}}>Works</span>
            </Typography>
            <Grid container spacing={3} justifyContent="left" sx={{maxWidth: '1400px'}}>
                {projects.map((project, index) => (
                    <Grid size={{xs: 12, sm: 6, md: 3,}} key={index} sx={{display: 'flex', justifyContent: 'center'}}>
                        <ProjectCard project={project}
                                     maxContentHeight={maxContentHeight}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Projects;