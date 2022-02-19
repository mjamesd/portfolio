import React from 'react';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";


const About = ({ contentAnimation }) => {
    return (
        <motion.div variants={contentAnimation}>
            <h1>About</h1>
            <div class="col s12 m4">
                <div class="card-panel site-purple hoverable">
                    <h4 class="white-text">Full Stack Web Developer</h4>
                    <span class="white-text">HTML5, accessible web, CSS3, Bootstrap, Materialize, JavaScript,
                        Express, Node.js, jQuery, PHP, MySQL, & WordPress</span>
                </div>
            </div>
            <div class="col s12 m8">
                <div class="card horizontal hoverable">
                    <div class="card-image">
                        <img id="profile-pic" src="/img/markdrummond.jpg" alt="Mark Drummond" />
                    </div>
                    <div class="card-stacked">
                        <div class="card-content">
                            <p>
                                I'm a thirty-something new dad from Kansas City, Kansas, living in Seattle and
                                following my passion as a full-stack web
                                developer. I <a href="/portfolio">create responsive websites and content
                                    management systems</a> for clients big and small. I want to work with your
                                farmer's market stand, small business, university department, or development firm to
                                create a meaningful product that meets yours and your customers' needs. Contact me
                                today to discuss your next website!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default About;