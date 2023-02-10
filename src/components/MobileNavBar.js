import React from 'react'
import styled from 'styled-components'
import { NavButton } from './styles/Buttons';

const StyledMobileNavBar = styled.div`
    display: block;
    @media (min-width: 774px) {
        display: none;  
    }
    z-index: 999;
`;

const StyledMobileNavList = styled.nav`
    transition: all 350ms ease-in-out;
    height: calc(100% + 60px);
    background-color: #fff;
    box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    padding-block: 1rem;
    padding-inline-end: 1.5rem;
`;

const StyledMenuToggleI = styled.i`
    color: rgba(255,255,255,0.8);
    transition: transform 350ms ease-in-out;
`;

const StyledI = styled.i`
    padding-block-end: 3px;
    padding-inline-end: 10px;
    color: ${props => props.active ? "var(--light2)" : "rgba(255,255,255,0.8)"};
`;

const StyledNavButton = styled(NavButton)`
    background-color: unset;
    color: #000;
`;


const MobileNavBar = (props) => {

    const handleToggleMobileMenu = () => {
        let mobileMenuButton = document.getElementById('mobileMenuButton');
        let mobileNavList = document.getElementById('mobileNavList');
        let mobileNavOverlay = document.getElementById('mobileNavOverlay');
        let brandEl = document.getElementById('brand');
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
            // We need to give the browser time to complete the transition, which is 350ms -- we give it 355ms before changing display to 'none'
            window.setTimeout(function() {
                mobileNavOverlay.style.display = 'none';
            }, 355)
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
                <StyledNavButton
                    key='home'
                    active={props.currentPage === 'Home' ? true : false}
                    onClick={() => {props.handlePageChange('Home'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'Home' ? true : false}
                >home</StyledI>Home
                </StyledNavButton>
                <StyledNavButton
                    key='about'
                    active={props.currentPage === 'About' ? true : false}
                    onClick={() => {props.handlePageChange('About'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'About' ? true : false}
                >account_circle</StyledI>About
                </StyledNavButton>
                <StyledNavButton
                    key='portfolio'
                    active={props.currentPage === 'Portfolio' ? true : false}
                    onClick={() => {props.handlePageChange('Portfolio'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'Portfolio' ? true : false}
                >web</StyledI>Portfolio
                </StyledNavButton>
                <StyledNavButton
                    key='contact'
                    active={props.currentPage === 'Contact' ? true : false}
                    onClick={() => {props.handlePageChange('Contact'); handleToggleMobileMenu();}}
                ><StyledI
                    className="material-icons left"
                    active={props.currentPage === 'Contact' ? true : false}
                >phonelink_ring</StyledI>Contact
                </StyledNavButton>
            </StyledMobileNavList>
        </StyledMobileNavBar>
    )
}

export default MobileNavBar