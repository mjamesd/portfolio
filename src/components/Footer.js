import React from 'react';
import { LinkStyleButton } from '../Styles';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: flex;
	flex-direction: column;
    justify-content: center;
    align-items: center;
	height: 64px;
    background-color: var(--purple-light);
    color: var(--white);
    box-shadow: var(--box-shadow-reverse);
`;

const StyledFooterLinkStyleButton = styled(LinkStyleButton)`
	background: var(--green-light);
    border-radius: 25px;
    padding: 5px 10px;
    margin-block-end: 5px;
    font-size: 0.75rem;
	z-index: 999;
    &:hover {
        background: var(--green-dark);
    }
    transition: background var(--transition-time-slow) ease-out;
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
				onClick={() => {
					window.open('https://pngtree.com/free-backgrounds', '_blank');
				}}
			>background images from pngtree.com
			</StyledFooterLinkStyleButton>
			<StyledP>&copy; 2021-{getYear()} DrumDev</StyledP>
		</StyledFooter>
	)
}

export default Footer