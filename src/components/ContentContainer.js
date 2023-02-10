import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    position: relative;
    top: 9px;
    width: var(--body-vw);
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