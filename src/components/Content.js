import React from 'react';
import Grid from '@mui/material/Grid';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

const Content = (props) => {
    return (
        <Grid item xs={12} sm={8}>
            <About />
            <Projects />
            <Contact />
            <Resume />
        </Grid>
    );
};

export default Content;