import React from 'react';
import { StyledContentContainer, StyledCardNormal, StyledCardHighlight, StyledCardHighlightTitle, StyledCardHighlightP, StyledImg } from '../../Styles';
import styled from 'styled-components';

const HomeCard = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const HomeCardP = styled.p`
	padding: 0.25rem 0.75rem;
	margin: 0;
`;

// Image flip
// https://daily-dev-tips.com/posts/css-flip-cards/
const StyledFlipCardInner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform calc(var(--transition-time-int) * 4); /* very fast */
    transform-style: preserve-3d;
`;
const StyledFlipCard = styled.div`
    background: var(--green-light);
    background: radial-gradient(circle, var(--green-light-shade) 35%, var(--green-light) 100%);
    width: 255px;
    height: 255px;
    border-radius: var(--border-radius-original);
    perspective: 2000px;
    &:hover ${StyledFlipCardInner} {
        transform: rotateY(180deg);
    }
`;
const StyledFlipCardSide = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const StyledFlipCardBackSide = styled(StyledFlipCardSide)`
    transform: rotateY(180deg);
`;

const Home = (props) => {
    return (
        <StyledContentContainer className="home">
            <StyledCardHighlight>
                <StyledCardHighlightTitle>
                    Full&nbsp;Stack Web&nbsp;Developer
                </StyledCardHighlightTitle>
                <StyledCardHighlightP>
                    HTML5, accessible & semantic web, CSS3, Bootstrap, Materialize JS & CSS,
                    JavaScript, jQuery, Node.js, Express, React, React Material UI library,
                    Mongoose, GraphQL, PHP, MySQL, MongoDB, WordPress, PWA, SPA, Git, & Heroku
                </StyledCardHighlightP>
            </StyledCardHighlight>
            <StyledCardNormal>
                <HomeCard>
                    <StyledFlipCard>
                        <StyledFlipCardInner>
                            <StyledFlipCardSide>
                                <img
                                    src="./assets/markdrummond_250.jpg"
                                    alt="Mark J Drummond"
                                    style={{ width: '250px', height: '250px', borderRadius: 'var(--border-radius-original)' }}
                                />
                            </StyledFlipCardSide>
                            <StyledFlipCardBackSide>
                                <StyledImg
                                    src="./assets/mark-and-leon_250.jpg"
                                    alt="Mark J Drummond"
                                    style={{ width: '250px', height: '250px' }}
                                />
                            </StyledFlipCardBackSide>
                        </StyledFlipCardInner>
                    </StyledFlipCard>
                    <HomeCardP>
                        I'm a thirty-something new dad from Kansas City, now living in Seattle and
                        following my passion as a full stack web developer.<br /><br />
                        I have independent, freelance, and team development experience creating
                        fullstack web apps, mobile-responsive websites, and content management systems
                        for clients big and small. Contact me today to discuss your next website!
                    </HomeCardP>
                </HomeCard>
            </StyledCardNormal>
        </StyledContentContainer>
    );
}

export default Home