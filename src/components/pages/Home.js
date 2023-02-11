import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.section`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-items: center;
    gap: 1.5rem;
    margin-inline: auto;
    padding-block: 1rem;
    width: 95%;
`;

const HomeCard = styled.section`
    display: grid;
    grid-template-columns: 260px 25vw;
    align-items: start;
    gap: 1.5rem;
    width: 100%;
    justify-content: end;
    background-color: rgba(255, 255, 255, 0.85);
    border-radius: 5px;
    padding: 1rem 0.5rem;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 14%), 0 3px 1px -2px rgba(0, 0, 0, 12%), 0 1px 5px 0 rgba(0, 0, 0, 20%);
    transition: box-shadow 350ms ease-in-out;
    &:hover {
        box-shadow: 0 8px 17px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
    }
`;

const StyledHomeCardImg = styled.img`
    padding-inline: 0.5rem;
    border-radius: 15%;
`;

const StyledHomeCardP = styled.p`
    padding: 0.25rem 0.75rem;
    margin: 0;
`;

const ProficiencyCard = styled.aside`
    background: var(--purple-highlight-color);
    color: #fff;
    padding: 1rem;
    border-radius: 5px;
`;

const StyledProficiencyCardTitle = styled.p`
    font-family: 'Permanent Marker', cursive;
    font-size: 2rem;
`;

const Home = ({ currentPage, handlePageChange }) => {
    return (
        <StyledHome className="home">
            <HomeCard>
                <StyledHomeCardImg className="profile-pic" src="./assets/markdrummond_250.jpg" alt="Mark J Drummond" />
                <StyledHomeCardP>
                    I'm a thirty-something new dad from Kansas City, now living in Seattle and
                    following my passion as a full stack web developer. I have independent,
                    freelance, and team development experience creating full
                    stack web apps, mobile-responsive websites, and content management
                    systems for clients big and small. Contact me today to discuss your next website!
                </StyledHomeCardP>
            </HomeCard>
            <ProficiencyCard>
                <StyledProficiencyCardTitle>Full&nbsp;Stack Web&nbsp;Developer</StyledProficiencyCardTitle>
                <span>HTML5, accessible & semantic web, CSS3, Bootstrap, Materialize JS & CSS,
                    JavaScript, jQuery, Node.js, Express, React, React Material UI library, Mongoose,
                    GraphQL, PHP, MySQL, MongoDB, WordPress, PWA, SPA, Git, & Heroku</span>
            </ProficiencyCard>
        </StyledHome>
    );
}

export default Home