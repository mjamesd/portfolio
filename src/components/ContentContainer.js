import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    width: calc(var(--body-vw) - 40px);
    margin-inline: auto;
    padding-inline: 1rem;
    transition: opacity 250ms ease-in-out;
`;


const ContentContainer = ({renderPage}) => {
  return (
    <StyledMain id="contentContainer">
      {renderPage()}
    </StyledMain>
  );
}

export default ContentContainer