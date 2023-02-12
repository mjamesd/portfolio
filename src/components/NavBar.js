import React from 'react';
import styled from 'styled-components';
import { NavButton } from './Styles';

const NavList = styled.nav`
    display: none;
    @media (min-width: 825px) {
        display: flex;
        height: 100%;
    }
`;

const StyledI = styled.i`
    padding-block-end: 3px;
    padding-inline-end: 10px;
    color: ${props => props.active ? "var(--light2)" : "rgba(255,255,255,0.8)"};
`;

const NavBar = (props) => {
    return (
        <NavList>
            <NavButton
                key='home'
                active={props.currentPage === 'Home' ? true : false}
                onClick={() => props.handlePageChange('Home')}
            ><StyledI
                className="material-icons left"
                active={props.currentPage === 'Home' ? true : false}
                >home</StyledI>Home
            </NavButton>
            <NavButton
                key='about'
                active={props.currentPage === 'About' ? true : false}
                onClick={() => props.handlePageChange('About')}
            ><StyledI
                className="material-icons left"
                active={props.currentPage === 'About' ? true : false}
                >account_circle</StyledI>About
            </NavButton>
            <NavButton
                key='portfolio'
                active={props.currentPage === 'Portfolio' ? true : false}
                onClick={() => props.handlePageChange('Portfolio')}
            ><StyledI
                className="material-icons left"
                active={props.currentPage === 'Portfolio' ? true : false}
                >web</StyledI>Portfolio
            </NavButton>
            <NavButton
                key='contact'
                active={props.currentPage === 'Contact' ? true : false}
                onClick={() => props.handlePageChange('Contact')}
            ><StyledI
                className="material-icons left"
                active={props.currentPage === 'Contact' ? true : false}
                >phonelink_ring</StyledI>Contact
            </NavButton>
        </NavList>
    );
}

export default NavBar