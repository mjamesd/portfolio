import React from 'react';
import styled from 'styled-components';

const FooterEl = styled.footer`
    align-self: center;
`;

const Footer = () => {
    return (
        <FooterEl>
            &copy; {new Date().getUTCFullYear()} DrumDev
        </FooterEl>
    )
}

export default Footer