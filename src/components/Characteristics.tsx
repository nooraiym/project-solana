import React from 'react';
import { styled } from 'styled-components';
import { Announcement } from './Announcement';
import { BigHeader } from './BigHeader';
import { Container } from './Container';
import { TextWrapper } from './TextWrapper';
import { Text } from './Text';
import { theme } from '../styles/Theme';
import { Link } from './Link';

export const Characteristics = () => {
    return (
        <CharacteristicGrid>
            <TextWrapper>
                <BigHeader marginTop>Made for <br/>mass adoption.</BigHeader>
                <Qualification>Live data</Qualification>
            </TextWrapper>
            
            <Container column gap={'10px'} justify={'flex-end'}>
                <Characteristic>
                    <TextWrapper>
                        <SmallHeader>Fast</SmallHeader>
                        <Text>
                            Don&#39;t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.
                        </Text>
                    </TextWrapper>
                    <TextWrapper>
                        <Qualification>3,969</Qualification>
                        <Announcement color={theme.fontColor.alternate}>Transactions per second</Announcement>
                    </TextWrapper>
                </Characteristic>

                <Characteristic>
                    <TextWrapper>
                        <SmallHeader>Scalable</SmallHeader>
                        <Text>
                            Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.
                        </Text>
                    </TextWrapper>
                    <TextWrapper>
                        <Qualification>163,077,581,394</Qualification>
                        <Announcement color={theme.fontColor.alternate}>Total transactions</Announcement>
                    </TextWrapper>
                </Characteristic>
            </Container>

            <Container column gap={'10px'}>
                <Characteristic>
                    <TextWrapper>
                        <SmallHeader>Decentralized</SmallHeader>
                        <Text>
                            The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.
                        </Text>
                    </TextWrapper>
                    <TextWrapper>
                        <Qualification>1,675</Qualification>
                        <Announcement color={theme.fontColor.alternate}>Validator nodes</Announcement>
                    </TextWrapper>
                </Characteristic>

                <Characteristic>
                    <TextWrapper>
                        <SmallHeader>Energy Efficient</SmallHeader>
                        <Text>
                            Solana&#39;s proof of stake network and other innovations minimize its impact on the <Link color='green' href="https://solana.com/environment">environment.</Link> Each Solana transaction uses about the same energy as a few Google searches.
                        </Text>
                    </TextWrapper>
                    <TextWrapper>
                        <Qualification>0%</Qualification>
                        <Announcement color={theme.fontColor.alternate}>Net carbon impact</Announcement>
                    </TextWrapper>
                </Characteristic>
            </Container>
        </CharacteristicGrid>
    );
};



const SmallHeader = styled.h3`
    font-size: 28px;
    margin-bottom: 10px;

    &::before {
        content: '';
        display: inline-block;
        width: 2px;
        height: 33px;
        background-color: white;
        margin-right: 17px;
        vertical-align: middle;
    }
`

const Qualification = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    text-transform: uppercase;
    margin-bottom: 10px;

    &:first-child {
        font-size: 16px;
    }

    &::before {
        content: '';
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: ${theme.fontColor.list};
        margin-right: 5px;
        vertical-align: super;
    }
`

const Characteristic = styled.div`
    max-width: 330px;
    width: 100%;
    padding: 34px;

    display: flex;
    flex-direction: column;

    ${TextWrapper}:first-child {
        margin-bottom: 28px;
    }

    ${Qualification} {
        font-size: 26px;
    }
`

const CharacteristicGrid = styled.div`
    display: grid;
    grid-template: 1fr / repeat(3, minmax(340px, 1fr));
    column-gap: 20px;

    grid-auto-flow: column;

    ${SmallHeader}::before {
        background-color: ${theme.lineColor.first};
    }

`