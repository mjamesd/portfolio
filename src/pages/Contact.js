import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, MobileStepper, Paper, Typography, Button } from '@mui/material';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { motion } from "framer-motion";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const Contact = ({ contentAnimation }) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <motion.div variants={contentAnimation}>
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: 255,
                                        display: 'block',
                                        maxWidth: 400,
                                        overflow: 'hidden',
                                        width: '100%',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
        </motion.div>
    );

    // return (
    //     <motion.div variants={contentAnimation}>
    //         <h1>Contact</h1>
    //         <div class="carousel">
    //             <a class="carousel-item" href="tel:19137070806"><img src="./assets/img/phone-square-solid.svg"
    //                 alt="phone number" /></a>
    //             <a class="carousel-item" href="mailto:mjamesd@gmail.com?subject=Portfolio Interest"
    //                 target="_blank"><img src="./assets/img/envelope-square-solid.svg" alt="mjamesd@gmail.com" /></a>
    //             <a class="carousel-item" href="https://github.com/mjamesd" target="_blank"><img
    //                 src="./assets/img/github-square-brands.svg" alt="GitHub" /></a>
    //             <a class="carousel-item" href="https://www.linkedin.com/in/markjdrummond" target="_blank"><img
    //                 src="./assets/img/linkedin-brands.svg" alt="LinkedIn" /></a>
    //             <a class="carousel-item" href="https://twitter.com/mjamesd_206" target="_blank"><img
    //                 src="./assets/img/twitter-square-brands.svg" alt="Twitter" /></a>
    //             <a class="carousel-item" href="./assets/img/Mark Drummond_Resume.pdf" target="_blank"><img
    //                 src="./assets/img/file-alt-solid.svg" alt="Resume" />Resum&eacute;</a>
    //         </div>
    //     </motion.div>
    // );
};

export default Contact;