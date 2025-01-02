import {lazy, Suspense, useState} from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import {darkTheme, lightTheme} from './themes/theme';

import Header from './components/Header';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import ParticlesBackground from './components/ParticlesBackground';
import './App.css';

const Error404 = lazy(() => import('./pages/Error404'));
const Home = lazy(() => import('./pages/Home/Home'));
const About = lazy(() => import('./pages/About/About'));
const Projetcs = lazy(() => import('./pages/Projects/Projects'));

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
                    <Header toggleTheme={toggleTheme}/>
                    <div className='content'>
                        <ParticlesBackground/>

                        <Suspense fallback={<LoadingSpinner/>}>
                            <Routes>
                                <Route path='*' element={<Error404/>}/>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/projects" element={<Projetcs/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                    <Footer/>
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
