import React from 'react';
import NavBar from './NavBar';
import MobileNavBar from './MobileNavBar';
import styled from 'styled-components';
import { LinkStyleButton } from '../Styles';

const StyledHeaderWrapper = styled.header`
    display: block;
    position: relative;
    height: 64px;
    z-index: 998;
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 96vw;
    height: 64px;
    padding-inline: 2vw;
    background-color: var(--purple-light);
    color: #fff;
    box-shadow: var(--box-shadow-hover);
    @media (min-width: 825px) {
        justify-content: space-between;
    }
`;

const HeaderLinkStyleButton = styled(LinkStyleButton)`
    cursor: default;
    border-block-end: none;
    color: var(--white);
    &:hover {
        color: var(--white-flat);
    }
    transition: all var(--transition-time-normal) ease-in-out;
`;

const Brand = styled.section`
    display: grid;
    grid-template-columns: 1fr 5fr;
    align-items: center;
    min-height: 100%;
    transition: transform var(--transition-time-normal) ease-in-out;
`;

const HeaderImage = styled.img`
    transition: all var(--transition-time-fast) ease-in-out;
    width: 49px;
    margin-inline-end: 10px;
    clip-path: circle(45% at 50% 50%);
    &:hover,
    &:focus {
        clip-path: circle(50% at 50% 50%);
        animation-name: spin;
        animation-duration: 300ms;
        animation-iteration-count: 1;
        animation-timing-function: linear;
        @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }
    }
`;

const HeaderText = styled.p`
    margin: 0;
    font-size: 2.1rem;
    font-family: 'Permanent Marker', cursive;
`;

const Header = (props) => {
    return (
        <StyledHeaderWrapper>
            <StyledHeader>
                <MobileNavBar currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
                <HeaderLinkStyleButton
                    key="home"
                    onClick={() => props.handlePageChange('Home')}
                >
                    <Brand id="brand">
                        <HeaderImage src="./assets/logo192.png" alt="Mark Drummond" />
                        <HeaderText>Mark&nbsp;Drummond</HeaderText>
                    </Brand>
                </HeaderLinkStyleButton>
                <NavBar currentPage={props.currentPage} handlePageChange={props.handlePageChange} />
            </StyledHeader>
        </StyledHeaderWrapper>
    )
}

export default Header