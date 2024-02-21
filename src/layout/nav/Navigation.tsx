import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { Logo } from '../../components/Logo';
import { NavBar } from '../../components/NavBar';
import { theme } from '../../styles/Theme';

export const Navigation = () => {
    return (
        <NavigationWrapper>
            <Container spaced>
                <Logo />
                <NavBar />
            </Container>
        </NavigationWrapper>
    );
};

const NavigationWrapper = styled.section`
    width: 100%;
    min-height: 67px;
    background-color: ${theme.colors.bgOpacity};

    display: flex;
    justify-content: center;

    position: fixed;
    top: 38px;
`