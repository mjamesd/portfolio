import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
    width: calc(var(--body-vw) - 40px);
    margin-inline: auto;
    padding-inline: 1rem;
    transition: opacity var(--transition-time-fast) ease-in-out;
`;


const ContentContainer = (props) => {
  return (
    <StyledMain id="contentContainer">
      {props.renderPage()}
    </StyledMain>
  );
}

export default ContentContainer