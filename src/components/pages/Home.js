import React from 'react';
import { StyledCard } from '../Styles';
import styled from 'styled-components';

const StyledHome = styled.section`
	display: grid;
	justify-items: center;
	gap: 1.5rem;
	margin-inline: auto;
	padding-block: 1rem;
	width: 95%;
`;

const ProficiencyCard = styled(StyledCard)`
	background: var(--purple-dark);
	color: var(--white);
    max-width: 40vw;
    @media screen and (max-width: 825px) {
        max-width: 67vw;
    }
`;

const ProficiencyCardTitle = styled.p`
    padding-block-end: 10px;
	font-family: 'Permanent Marker', cursive;
	font-size: var(--font-size-title);
    text-align: center;
`;

const ProficiencyCardP = styled.p`
	display: block;
	text-align: justify;
`;

const MarkCardContainer = styled(StyledCard)`
	background-color: var(--white);
    color: var(--black);
    max-width: 50vw;
    @media screen and (max-width: 825px) {
        max-width: 80vw;
    }
`;

const MarkCard = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    @media screen and (max-width: 576px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const MarkCardP = styled.p`
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
    background-color: transparent;
    width: 250px;
    height: 250px;
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
        <StyledHome className="home">
            <ProficiencyCard>
                <ProficiencyCardTitle>
                    Full&nbsp;Stack Web&nbsp;Developer
                </ProficiencyCardTitle>
                <ProficiencyCardP>
                    HTML5, accessible & semantic web, CSS3, Bootstrap, Materialize JS & CSS,
                    JavaScript, jQuery, Node.js, Express, React, React Material UI library,
                    Mongoose, GraphQL, PHP, MySQL, MongoDB, WordPress, PWA, SPA, Git, & Heroku
                </ProficiencyCardP>
            </ProficiencyCard>
            <MarkCardContainer>
                <MarkCard>
                    <StyledFlipCard>
                        <StyledFlipCardInner>
                            <StyledFlipCardSide>
                                <img
                                    src="./assets/markdrummond_250.jpg"
                                    alt="Mark J Drummond"
                                    style={{ width: '250px', height: '250px;', borderRadius: 'var(--border-radius-original)' }}
                                />
                            </StyledFlipCardSide>
                            <StyledFlipCardBackSide>
                                <img
                                    src="./assets/mark-and-leon_250.jpg"
                                    alt="Mark J Drummond"
                                    style={{ width: '250px', height: '250px;', borderRadius: 'var(--border-radius-original)' }}
                                />
                            </StyledFlipCardBackSide>
                        </StyledFlipCardInner>
                    </StyledFlipCard>
                    <MarkCardP>
                        I'm a thirty-something new dad from Kansas City, now living in Seattle and
                        following my passion as a full stack web developer.<br /><br />
                        I have independent, freelance, and team development experience creating
                        fullstack web apps, mobile-responsive websites, and content management systems
                        for clients big and small. Contact me today to discuss your next website!
                    </MarkCardP>
                </MarkCard>
            </MarkCardContainer>
        </StyledHome>
    );
}

export default Home