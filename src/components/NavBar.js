import React from 'react';
import styled from 'styled-components';

const NavList = styled.nav`
    align-self: center;
`;

const NavButton = styled.button`
    background: ${props => props.active ? "#000" : "#fff"};
    color: ${props => props.active ? "#fff" : "#000"};
`;

const NavBar = ({ currentPage, handlePageChange }) => {
    return (
        <NavList>
            <NavButton
                key='home'
                active={currentPage === 'Home' ? true : false}
                onClick={() => handlePageChange('Home')}
                onMouseOver={() => this.classList}
            >Home
            </NavButton>
            <NavButton
                key='about'
                active={currentPage === 'About' ? true : false}
                onClick={() => handlePageChange('About')}
            >About
            </NavButton>
            <NavButton
                key='portfolio'
                active={currentPage === 'Portfolio' ? true : false}
                onClick={() => handlePageChange('Portfolio')}
            >Portfolio
            </NavButton>
            <NavButton
                key='contact'
                active={currentPage === 'Contact' ? true : false}
                onClick={() => handlePageChange('Contact')}
            >Contact
            </NavButton>
        </NavList>
    );
}

export default NavBar