import styled from 'styled-components'

const Button = styled.button`
    cursor: pointer;
`;

const LinkStyleButton = styled(Button)`
    transition: color var(--transition-time-fast) ease-in-out;
    border: none;
    background: none;
    color: var(--purple-dark);
    border-block-end: 1px solid var(--green-light);
    padding: 0;
    cursor: pointer;
    &:hover {
        color: var(--green-light);
    }
`;

const NavButton = styled(Button)`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 0.75rem;
    border: none;
    background-color: ${props => props.active ? "var(--purple-dark)" : 'unset'};
    color: ${ props => props.active ? "var(--white-flat)" : "var(--white)" };
    cursor: pointer;
    transition: background-color var(--transition-time-fast) ease-in-out;
    &:hover{
        background-color: ${props => props.active ? "var(--purple-dark)" : 'var(--shade)'};
    }
`;

const StyledImg = styled.img`
	border-radius: var(--border-radius-original);
`;

const StyledContentContainer = styled.section`
	display: grid;
	justify-items: center;
	gap: 1.5rem;
	margin-inline: auto;
	padding-block: 1rem;
	width: 95%;
`;

const StyledCard = styled.section`
    padding: 1rem;
    border-radius: var(--border-radius-original);
    box-shadow: var(--box-shadow-original);
    &:hover {
        box-shadow: var(--box-shadow-hover);
    }
    transition: box-shadow var(--transition-time-fast) ease-in-out;
`;

const StyledCardNormal = styled(StyledCard)`
	background-color: var(--white);
    color: var(--black);
    width: 50vw;
    @media screen and (max-width: 825px) {
        width: 80vw;
    }
`;

const StyledCardNormalTitle = styled.p`
    padding-block-end: 10px;
    font-family: 'Permanent Marker', cursive;
    font-size: var(--font-size-title);
    text-align: center;
`;

const StyledCardNormalP = styled.p`
    display: block;
`;

const StyledCardHighlight = styled(StyledCard)`
	background: var(--purple-dark);
	color: var(--white);
    width: 40vw;
    @media screen and (max-width: 825px) {
        width: 67vw;
    }
`;

const StyledCardHighlightTitle = styled.p`
    padding-block-end: 10px;
	font-family: 'Permanent Marker', cursive;
	font-size: var(--font-size-title);
    text-align: center;
`;

const StyledCardHighlightP = styled.p`
	display: block;
	text-align: justify;
`;

export {
    Button, LinkStyleButton, NavButton,
    StyledImg, StyledContentContainer, StyledCard,
    StyledCardNormal, StyledCardNormalTitle, StyledCardNormalP,
    StyledCardHighlight, StyledCardHighlightTitle, StyledCardHighlightP
};