import React from 'react';
import { Container } from '../../components/Container';
import { styled } from 'styled-components';
import { theme } from '../../styles/Theme';
import { Announcement } from '../../components/Announcement';

export const Adversiting = () => {
    return (
        <AdversitingWrapper>
            <Container centered>
                <Announcement color={theme.fontColor.accent}>Breakpoint 2023 - New City. New Vibes - Get Early Access -&#62;</Announcement>
            </Container>
        </AdversitingWrapper>
    );
};

const AdversitingWrapper = styled.section`
    max-width: 1732px;
    width: 100%;
    padding: 9px 0;
    background-image: linear-gradient(45deg, ${theme.gradient2.first}, ${theme.gradient2.second});

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
`