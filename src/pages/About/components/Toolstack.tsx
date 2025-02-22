import {Box, Container, Grid2 as Grid, Typography} from "@mui/material";
import {SiMacos, SiOracle, SiPycharm, SiRender, SiUbuntu, SiVercel, SiWebstorm,} from "react-icons/si";
import {FaAws, FaGithub, FaWindows} from "react-icons/fa";


const tools = [
    {icon: <SiUbuntu/>, name: 'Ubutu'},
    {icon: <FaWindows/>, name: 'Windows'},
    {icon: <SiMacos/>, name: 'MacOS'},
    {icon: <SiPycharm/>, name: 'PyCharm'},
    {icon: <SiWebstorm/>, name: 'WebStorm'},
    {icon: <FaGithub/>, name: 'GitHub'},
    {icon: <SiOracle/>, name: 'OCI'},
    {icon: <FaAws/>, name: 'AWS'},
    {icon: <SiRender/>, name: 'Render'},
    {icon: <SiVercel/>, name: 'Vercel'},
];

const Toolstack = () => (
    <Container>
        <Typography variant="h4" align="center" gutterBottom>
            <Box component="span" sx={{color: 'primary.main'}}>Tools</Box> I Use
        </Typography>
        <Grid container spacing={2} justifyContent="center" marginTop='1rem'>
            {tools.map((tool, index) => (
                <Grid size={{xs: 4, md: 2}} key={index} sx={{textAlign: 'center'}}>
                    <Box sx={{fontSize: 40}}>{tool.icon}</Box>
                    <Typography variant="subtitle1">{tool.name}</Typography>
                </Grid>
            ))}
        </Grid>
    </Container>
);

export default Toolstack;