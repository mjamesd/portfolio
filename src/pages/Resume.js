import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumeFile from '../img/Mark Drummond_Resume.pdf';

// const resumeFile = "/img/Mark Drummond_Resume.pdf";

const Resume = ({ contentAnimation }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const changePage = (offset) => {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    const previousPage = () => {
        changePage(-1);
    }

    const nextPage = () => {
        changePage(1);
    }

    return (
        <motion.div variants={contentAnimation}>
            <Grid container direction='column'>
                <Grid item>
                    <h1>Resume</h1>
                </Grid>
                <Grid item style={{ position: 'relative' }}>
                    <Document file={resumeFile} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page pageNumber={pageNumber} />
                        <div className='page-controls'>
                            <p>
                                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                            </p>
                            <button
                                type="button"
                                disabled={pageNumber <= 1}
                                onClick={previousPage}
                            >
                                &lt;
                            </button>
                            <button
                                type="button"
                                disabled={pageNumber >= numPages}
                                onClick={nextPage}
                            >
                                &gt;
                            </button>
                        </div>
                    </Document>
                </Grid>
            </Grid>
        </motion.div>
    );
};

export default Resume;