import React from 'react';
import { LinkStyleButton } from './styles/Buttons';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
	height: 64px;
    background-color: var(--purple-bg-color);
    color: rgba(255,255,255,0.8);
    font-family: 'Special Elite', cursive;
`;

const StyledFooterLinkStyleButton = styled(LinkStyleButton)`
	background: rgba(255,255,255,0.2);
	z-index: 999;
`;

const StyledP = styled.p`
	margin-block-end: 0;
`;

const getYear = () => {
	return new Date().getUTCFullYear();
}

const Footer = () => {
	return (
		<StyledFooter>
			<StyledFooterLinkStyleButton
				onClick={(e) => {
					e.preventDefault();
					window.open('https://pngtree.com/free-backgrounds', '_blank');
				}}
			>background images from pngtree.com
			</StyledFooterLinkStyleButton>
			<StyledP>&copy; {getYear()} DrumDev</StyledP>
		</StyledFooter>
	)
}

export default Footer