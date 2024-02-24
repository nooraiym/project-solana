import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { BigHeader } from '../../components/BigHeader';
import { Statistics } from '../../components/Statistics';
import { Characteristics } from '../../components/Characteristics';

import back from '../../assets/img/community-bg.jpg'

type CommunityWrapperPropsType = {
    imgSrc?: string
}

export const Community = () => {
    return (
        <CommunityWrapper imgSrc={back}>
            <Container column gap={'130px'}>
                <Container gap={'268px'}>
                    <BigHeader positioned>Join a community of millions.</BigHeader>
                    <Statistics />
                </Container>

                <Container centered>
                    <Characteristics />
                </Container>
            </Container>
        </CommunityWrapper>
    );
};

const CommunityWrapper = styled.section<CommunityWrapperPropsType>`
    background-image: url(${props => props.imgSrc});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 125px;
    padding: 125px 0;

    display: flex;
    justify-content: center;
`