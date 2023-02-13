import React from 'react';
import styled from 'styled-components';
import { StyledContentContainer, StyledImg, StyledCardNormal, StyledCardNormalTitle, StyledCardNormalP, LinkStyleButton } from '../../Styles';

const StyledContactInfo = styled.div`
    opacity: 0;
    z-index: 0;
    transform: translateX(-20%);
    transition: all var(--transition-time-slow);
`;

const StyledContactCard = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    align-items: center;
    gap: 1rem;
    width: 70%;
    margin-inline: auto;
    &:hover > ${StyledContactInfo} {
        opacity: 1;
        z-index: 900;
        transform: translateX(0%);
    }
`;

const StyledContactImg = styled(StyledImg)`
    display: block;
    width: 60px;
    z-index: 901;
    background-color: var(--white-flat);
`;

const StyledContactLinkButton = styled(LinkStyleButton)`
    border-block-end: 0;
    font-size: 1.25rem;
`;

const Contact = ({ currentPage, handlePageChange }) => {
    return (
        <StyledContentContainer className="contact">
            <StyledCardNormal>
                <StyledCardNormalTitle>Contact Me</StyledCardNormalTitle>
                <StyledContactCard>
                    <StyledContactImg src="/assets/phone-square-solid.svg" alt="phone number" />
                    <StyledContactInfo>
                        <StyledContactLinkButton
                            onClick={() => {
                                window.open('tel:19137070806');
                            }}>
                            913-707-0806
                        </StyledContactLinkButton>
                    </StyledContactInfo>
                </StyledContactCard>


                {/* <LinkStyleButton class="carousel-item" href="tel:19137070806"><img src="./assets/phone-square-solid.svg"
                        alt="phone number" /></LinkStyleButton>
                    <LinkStyleButton class="carousel-item" href="mailto:mjamesd@gmail.com?subject=Portfolio Interest"
                        target="_blank" rel="noreferrer"><img src="./assets/envelope-square-solid.svg" alt="mjamesd@gmail.com" /></LinkStyleButton>
                    <LinkStyleButton class="carousel-item" href="https://github.com/mjamesd" target="_blank" rel="noreferrer"><img
                        src="./assets/github-square-brands.svg" alt="GitHub" /></LinkStyleButton>
                    <LinkStyleButton class="carousel-item" href="https://www.linkedin.com/in/markjdrummond" target="_blank" rel="noreferrer"><img
                        src="./assets/linkedin-brands.svg" alt="LinkedIn" /></LinkStyleButton>
                    <LinkStyleButton class="carousel-item" href="https://twitter.com/mjamesd_206" target="_blank" rel="noreferrer"><img
                        src="./assets/bird.svg" alt="Twitter" /></LinkStyleButton>
                    <LinkStyleButton class="carousel-item" href="./assets/img/Mark Drummond_Resume_2022-December.pdf"
                        target="_blank"><img src="./assets/file-alt-solid.svg" alt="Resume" />Resum&eacute;</LinkStyleButton> */}
            </StyledCardNormal>
        </StyledContentContainer>
    );
}

export default Contact