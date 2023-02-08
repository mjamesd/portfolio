import React from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';

const HeaderEl = styled.header`
    display: flex;
    justify-content: space-between;
`;

const Brand = styled.section`
    display: grid;
    grid-template-columns: 1fr 5fr;
`;

const HeaderImage = styled.img`
    border-radius: 50%;
    width: 50px;
    padding-inline-end: 10px;
`;

const HeaderText = styled.p`
    background: #000;
    color: #fff;
`;

const Header = ({ currentPage, handlePageChange }) => {
    return (
        <HeaderEl>
            <Brand>
                <HeaderImage src="./assets/logo192.png" alt="Mark Drummond" />
                <HeaderText>Mark Drummond</HeaderText>
            </Brand>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        </HeaderEl>
    )
}

export default Header