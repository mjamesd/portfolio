import React, { useState } from "react";
import styled from 'styled-components';

import Header from "./components/Header";
import ContentContainer from "./components/ContentContainer";
import Footer from "./components/Footer";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';

const AppContainer = styled.div`
    display: grid;
    grid-template-rows: 64px 1fr 28px;
    height: 100vh;
`;

const MobileNavOverlay = styled.div`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    height: 120vh;
    background-color: rgba(0,0,0,0.5);
    transition: opacity 350ms ease-in-out;
    z-index: 997;
`;

const App = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        // pass currentPage and handlePageChange to each page so their links can change the page
        switch (currentPage) {
            case 'About':
                return <About currentPage={currentPage} handlePageChange={handlePageChange} />;
            case 'Portfolio':
                return <Portfolio currentPage={currentPage} handlePageChange={handlePageChange} />;
            case 'Contact':
                return <Contact currentPage={currentPage} handlePageChange={handlePageChange} />;
            default:
                return <Home currentPage={currentPage} handlePageChange={handlePageChange} />;
        }
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        const top = document.getElementById('top');
        top.scrollIntoView();
    }

    const handleCloseMobileNavOverlay = () => {
        document.getElementById('mobileMenuButton').style.transform = 'rotate(0deg) translateY(0%)';
        document.getElementById('mobileNavList').style.transform = 'translateX(-110%)';
        document.getElementById('brand').style.transform = 'translateX(0%)';
        document.getElementById('mobileNavOverlay').style.opacity = '0';
        // We need to give the browser time to complete the transition, which is 350ms -- we give it 355ms before changing display to 'none'
        window.setTimeout(function() {
            document.getElementById('mobileNavOverlay').style.display = 'none';
          }, 355)
        document.body.style.overflow = '';
    };


    return (
        <AppContainer>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <ContentContainer renderPage={renderPage} />
            <Footer />
            <MobileNavOverlay id="mobileNavOverlay" style={{display: 'none', opacity: '0'}} onClick={handleCloseMobileNavOverlay} />
        </AppContainer>
    );
};

export default App;
