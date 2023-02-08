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
    grid-template-rows: 55px 1fr 55px;
    height: 100vh;
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

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <AppContainer>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            <ContentContainer renderPage={renderPage} />
            <Footer />
        </AppContainer>
    );
};

export default App;
