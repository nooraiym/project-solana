import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles/Theme';
// import arrow from '../assets/icons/navbar-arrow.svg'

// type NavBarListItemPropsType = {
//     imageSrc?: string
// }

export const NavBar = () => {
    return (
        <NavBarWrapper>
            <NavBarList>
                <NavBarListItem>Learn</NavBarListItem>
                <NavBarListItem>Build</NavBarListItem>
                <NavBarListItem>Network</NavBarListItem>
                <NavBarListItem>Community</NavBarListItem>
            </NavBarList>
        </NavBarWrapper>
    );
};

const NavBarWrapper = styled.nav``

const NavBarList = styled.ul`
    list-style: none;
    display: flex;
    gap: 32px;
`

const NavBarListItem = styled.li`
    font-size: 17px;
    color: ${theme.fontColor.secondary};
    display: inline-block;
`



// Как подключить стрелки в меню?
    /* &::after {
        content: '';
        width: 24px;
        height: 24px;
        background-image: url(${props => props.imageSrc});
    } */