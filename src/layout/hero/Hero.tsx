import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';

import back1 from '../../assets/img/hero-bg-1.png'
import { Button } from '../../components/Button';
// import back2 from '../../assets/img/hero-bg-2.png'

type HeroWrapperPropsType = {
    imgSrc: string
}

export const Hero = () => {
    return (
        <HeroWrapper imgSrc={back1}>
            <Container column>
                <TextWrapper>
                    <HeroHeader>Powerful for developers. Fast for everyone.</HeroHeader>
                    <HeroText>
                        Bring blockchain to the people. Solana supports experiences <br/> for power users, new consumers, and everyone in between.
                    </HeroText>
                </TextWrapper>
                <ButtonWrapper>
                    <Button as='a'>Start building</Button>
                    <Button as='a'>Read docs</Button>
                </ButtonWrapper>
            </Container>
        </HeroWrapper>
    );
};


const HeroWrapper = styled.section<HeroWrapperPropsType>`
    min-width: 1718px;
    width: 100%;
    /* min-height: 664px; */
    padding: 270px 0 120px;
    background-image: url(${props => props.imgSrc});
    background-size: 40%;
    background-position: -30px -58px;
    background-repeat: no-repeat;

    display: flex;
    justify-content: center;
`

const TextWrapper = styled.div`
    max-width: 777px;
    text-align: center;
`

const HeroHeader = styled.h2`
    font-size: 70px;
    word-spacing: 0.4rem;
    line-height: 76px;
`

const HeroText = styled.h1`
    font-size: 21px;
    margin: 55px 0 52px;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 14px;
`


// Как подключить второе изображение в бек
// Перенос текста