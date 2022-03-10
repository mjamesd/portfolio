import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import Grid from '@mui/material/Grid';
import "@fontsource/permanent-marker";
import "@fontsource/special-elite";
import "@fontsource/roboto";
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


const wholeAnimation = {
    animate: {
        transition: { staggerChildren: 0.25 },
    },
};

const contentAnimation = {
    initial: { x: -200, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.6, -0.05, 0.01, 0.99],
        },
    },
};

const App = () => {
    const [activePage, setActivePage] = useState('About');
    
    const handlePageChange = (page) => {
        console.log('changed active page to: ', page);
        setActivePage(page)
    };

    useEffect(() => {
        document.title = 'Mark Drummond | Portfolio | Full-Stack Web Developer';
    }, []);

    return (
        <Grid container direction='column'>
            <Grid item>
                <Header activePage={activePage} handlePageChange={handlePageChange} />
            </Grid>
            <Grid item container>
                <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                    <AnimatePresence exitBeforeEnter>
                        <motion.section exit={{ opacity: 0 }}>
                            <motion.div
                                variants={wholeAnimation}
                                animate="animate"
                                initial="initial"
                            >
                                <Routes>
                                    <Route exact path="/" element={<About contentAnimation={contentAnimation} />} />
                                    <Route exact path="/about" element={<About contentAnimation={contentAnimation} />} />
                                    <Route exact path="/portfolio" element={<Portfolio contentAnimation={contentAnimation} />} />
                                    <Route exact path="/contact" element={<Contact contentAnimation={contentAnimation} />} />
                                    <Route exact path="/resume" element={<Resume contentAnimation={contentAnimation} />} />
                                </Routes>
                            </motion.div>
                        </motion.section>
                    </AnimatePresence>
                </Grid>
                <Grid item xs={false} sm={2} />
            </Grid>
            <Grid item style={ { backgroundColor: '#724472' } }>
                <Footer />
            </Grid>
        </Grid>
    );
};

export default App;