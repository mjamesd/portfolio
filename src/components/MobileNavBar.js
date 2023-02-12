import React from 'react'
import styled from 'styled-components'
import { NavButton } from './Styles';

const StyledMobileNavBar = styled.div`
    display: block;
    @media (min-width: 825px) {
        display: none;  
    }
    z-index: 999;
`;

const StyledMobileNavList = styled.nav`
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    height: calc(100% + 60px);
    background-color: var(--white-flat);
    padding-block: 1rem;
    transition: all var(--transition-time-normal) ease-in-out;
`;

const StyledMenuToggleI = styled.i`
    color: var(--white);
    transition: transform var(--transition-time-normal) ease-in-out;
`;

const StyledI = styled.i`
    padding-block-end: 3px;
    padding-inline-end: 10px;
    color: ${props => props.active ? "var(--green-light)" : "var(--white)"};
`;


const MobileNavBar = (props) => {

    const handleToggleMobileMenu = () => {
        let mobileMenuButton = document.getElementById('mobileMenuButton');
        let mobileNavList = document.getElementById('mobileNavList');
        let mobileNavOverlay = document.getElementById('mobileNavOverlay');
        let brandEl = document.getElementById('brand');
        let transitionTime = getComputedStyle(document.documentElement).getPropertyValue('--transition-time-int');
        if (mobileNavList.style.transform === 'translateX(-110%)') {
            mobileMenuButton.style.transform = 'rotate(90deg) translateY(50%)';
            mobileNavOverlay.style.display = 'block';
            // We need to give the browser time to change the style
            window.setTimeout(function() {
                mobileNavOverlay.style.opacity = '1';
              }, 50)
            mobileNavList.style.opacity = '1';
            mobileNavList.style.transform = 'translateX(0%)';
            brandEl.style.transform = 'translateX(35%)';
            document.body.style.overflow = 'hidden';
        } else {
            mobileNavList.style.transform = 'translateX(-110%)';
            mobileMenuButton.style.transform = 'rotate(0deg) translateY(0%)';
            brandEl.style.transform = 'translateX(0%)';
            mobileNavOverlay.style.opacity = '0';
            // We need to give the browser time to complete the transition -- we give it transitionTime + 5 before changing display to 'none'
            window.setTimeout(function() {
                mobileNavOverlay.style.display = 'none';
            }, transitionTime + 5)
            document.body.style.overflow = '';
        }
    }

    return (
        <StyledMobileNavBar>
            <StyledMenuToggleI
                id="mobileMenuButton"
                className="material-icons left"
                onClick={() => handleToggleMobileMenu() }
                >menu</StyledMenuToggleI>
            <StyledMobileNavList id="mobileNavList" style={{transform: 'translateX(-110%)'}}>
                <NavButton
                    key='home'
                    active={props.currentPage === 'Home' ? true : false}
                    onClick={() => {props.handlePageChange('Home'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'Home' ? true : false}
                >home</StyledI>Home
                </NavButton>
                <NavButton
                    key='about'
                    active={props.currentPage === 'About' ? true : false}
                    onClick={() => {props.handlePageChange('About'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'About' ? true : false}
                >account_circle</StyledI>About
                </NavButton>
                <NavButton
                    key='portfolio'
                    active={props.currentPage === 'Portfolio' ? true : false}
                    onClick={() => {props.handlePageChange('Portfolio'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'Portfolio' ? true : false}
                >web</StyledI>Portfolio
                </NavButton>
                <NavButton
                    key='contact'
                    active={props.currentPage === 'Contact' ? true : false}
                    onClick={() => {props.handlePageChange('Contact'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'Contact' ? true : false}
                >phonelink_ring</StyledI>Contact
                </NavButton>
            </StyledMobileNavList>
        </StyledMobileNavBar>
    )
}

export default MobileNavBar