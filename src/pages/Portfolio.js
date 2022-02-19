import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import ProjectCard from '../components/ProjectCard';
import projectData from '../utils/projectData.json';

const Projects = ({ contentAnimation }) => {
    // const [proj0Fav, setProj0Fav] = useState(
    //     localStorage.getItem('proj0Fav') ? true : false
    // );
    // const [proj1Fav, setProj1Fav] = useState(
    //     localStorage.getItem('proj1Fav') ? true : false
    // );
    // const [proj2Fav, setProj2Fav] = useState(
    //     localStorage.getItem('proj2Fav') ? true : false
    // );
    // const [proj3Fav, setProj3Fav] = useState(
    //     localStorage.getItem('proj3Fav') ? true : false
    // );
    // const [proj4Fav, setProj4Fav] = useState(
    //     localStorage.getItem('proj4Fav') ? true : false
    // );
    // const [proj5Fav, setProj5Fav] = useState(
    //     localStorage.getItem('proj5Fav') ? true : false
    // );
    // const [proj6Fav, setProj6Fav] = useState(
    //     localStorage.getItem('proj6Fav') ? true : false
    // );

    // const handleProjectFavChange = (projectNum) => {
    //     if (localStorage.getItem(`proj${projectNum}Fav`)) {
    //         localStorage.removeItem(`proj${projectNum}Fav`);
    //         setProj0Fav(false);
    //     } else {
    //         localStorage.setItem(`proj${projectNum}Fav`, true);
    //         setProj0Fav(true);
    //     }
    // };

    return (
        <motion.div variants={contentAnimation}>
            <Grid container spacing={2}>
                {/* FIRST ROW - featured */}
                <Grid item xs={12} sm={12} md={8}>
                    <ProjectCard data={projectData[0]} />
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <ProjectCard data={projectData[1]} />
                </Grid>
                {/* SECOND ROW - featured */}
                <Grid item xs={12} sm={12} md={4}>
                    <ProjectCard data={projectData[2]} />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <ProjectCard data={projectData[3]} />
                </Grid>
                {/* THIRD ROW - not featured */}
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard data={projectData[4]} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard data={projectData[5]} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProjectCard data={projectData[6]} />
                </Grid>
            </Grid>
        </motion.div>
    );
};

export default Projects;