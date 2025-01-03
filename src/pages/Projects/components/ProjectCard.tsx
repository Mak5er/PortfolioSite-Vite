import {Box, Button, Card, CardContent, CardMedia, Skeleton, Typography} from '@mui/material';
import {useTheme} from '@mui/material/styles';
import {useState} from 'react';

const ProjectCard = ({project, maxContentHeight}) => {

    const theme = useTheme();

    const [loading, setLoading] = useState(true);

    const handleImageLoad = () => {
        setLoading(false);
    };


    return (
        <Card
            sx={{
                width: '100%',
                maxWidth: '370px',
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
                    height: loading ? 0 : '200px',
                    objectFit: 'contain',
                    alignPhoto: 'center',
                    borderRadius: '10px',
                    padding: '10px',
                }}
                image={project.photo}
                onLoad={handleImageLoad}
                title={project.title}
            />
            {loading && (
                <Skeleton variant="rectangular" width="100%" height='200px'/>
            )}

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
    );
};

export default ProjectCard;
