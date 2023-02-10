import styled from 'styled-components'

const Button = styled.button`
    cursor: pointer;
`;

const LinkStyleButton = styled(Button)`
    transition: all 250ms ease-in-out;
    border: none;
    background: none;
    color: var(--purple-highlight-color);
    border-bottom: 1px solid var(--light2);
    padding: 0;
    cursor: pointer;
    &:hover {
        color: var(--light2);
    }
`;

const NavButton = styled(Button)`
    display: flex;
    align-items: center;
    transition: background-color 250ms ease-in-out;
    border: none;
    padding-block: 0;
    background-color: ${props => props.active ? "var(--purple-highlight-color)" : 'unset'};
    color: rgba(255,255,255,0.8);
    font-family: 'Special Elite', cursive;
    cursor: pointer;
    &:hover{
        background-color: ${props => props.active ? "var(--purple-highlight-color)" : 'rgba(0,0,0,0.1)'};
    }
`;

export {Button, LinkStyleButton, NavButton};