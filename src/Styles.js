import styled from 'styled-components'

const Button = styled.button`
    cursor: pointer;
`;

const LinkStyleButton = styled(Button)`
    transition: color var(--transition-time-fast) ease-in-out;
    border: none;
    background: none;
    color: var(--purple-dark);
    border-bottom: 1px solid var(--green-light);
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

const StyledCard = styled.section`
    padding: 1rem;
    border-radius: var(--border-radius-original);
    box-shadow: var(--box-shadow-original);
    &:hover {
        box-shadow: var(--box-shadow-hover);
    }
    transition: box-shadow var(--transition-time-fast) ease-in-out;
`;

export {Button, LinkStyleButton, NavButton, StyledImg, StyledCard};