import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../styles/Theme';
import { Announcement } from './Announcement';
import { TextWrapper } from './TextWrapper';

export const Statistics = () => {
    return (
        <StatisticWrapper>
                <TextWrapper>
                    <StatisticItem>11.5M+</StatisticItem>
                    <Announcement color={theme.fontColor.secondary}>Active accounts</Announcement>
                </TextWrapper>

                <TextWrapper>
                    <StatisticItem>21.9M</StatisticItem>
                    <Announcement color={theme.fontColor.secondary}>NFTs minted</Announcement>
                </TextWrapper>

                <TextWrapper>
                    <StatisticItem>$0.00025</StatisticItem>
                    <Announcement color={theme.fontColor.secondary}>Average cost per transaction</Announcement>
                </TextWrapper>
        </StatisticWrapper>
    );
};



const StatisticItem = styled.div`
    font-size: 100px;
    margin-bottom: 14px;
`

const StatisticWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 54px;

    ${TextWrapper}:nth-child(1) {
        ${StatisticItem} {
            background-image: linear-gradient(45deg, ${theme.gradient1.first}, ${theme.gradient1.second});
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
        }
    }

    ${TextWrapper}:nth-child(2) {
        ${StatisticItem} {
            background-image: linear-gradient(45deg, ${theme.gradient2.first}, ${theme.gradient2.second});
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
        }
    }

    ${TextWrapper}:nth-child(3) {
        ${StatisticItem} {
            background-image: linear-gradient(45deg, ${theme.gradient3.first}, ${theme.gradient3.second});
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
        }
    }
`