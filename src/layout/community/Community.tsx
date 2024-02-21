import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { BigHeader } from '../../components/BigHeader';

import back from '../../assets/img/community-bg.jpg'
import { Statistic } from '../../components/Statistic';

type CommunityWrapperPropsType = {
    imgSrc?: string
}

export const Community = () => {
    return (
        <CommunityWrapper imgSrc={back}>
            <Container column>
                <Container gap={'268px'}>
                    <BigHeader>Join a community of millions.</BigHeader>
                    <Statistic />
                </Container>

                <Container>
                    <BigHeader>Made for mass adoption.</BigHeader>
                </Container>
            </Container>
        </CommunityWrapper>
    );
};

const CommunityWrapper = styled.section<CommunityWrapperPropsType>`
    background-image: url(${props => props.imgSrc});
    padding: 125px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`