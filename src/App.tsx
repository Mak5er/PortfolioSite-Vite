import {lazy, Suspense, useState} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {darkTheme, lightTheme} from './themes/theme';

import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ScrollToTop from "./components/ScrollToTop";
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

const Error404 = lazy(() => import('./pages/Error404'));
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Projects = lazy(() => import('./pages/Projects/Projects'));

function App() {
    const [theme, setTheme] = useState(darkTheme);

    const toggleTheme = () => {
        setTheme(theme === lightTheme ? darkTheme : lightTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Router>
                <div className="app-container">
                    <Suspense fallback={<LoadingSpinner/>}>
                        <Header toggleTheme={toggleTheme}/>
                        <div className='content'>
                            <ParticlesBackground/>
                            <ScrollToTop/>
                            <Routes>
                                <Route path='*' element={<Error404/>}/>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/projects" element={<Projects/>}/>
                            </Routes>
                        </div>
                        <Footer/>
                    </Suspense>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
