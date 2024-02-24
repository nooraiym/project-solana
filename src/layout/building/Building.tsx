import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { BigHeader } from '../../components/BigHeader';
import { Text } from '../../components/Text';
import { Link } from '../../components/Link';
import { theme } from '../../styles/Theme';


import image1 from '../../assets/img/building-img-1.jpg'
import logo1 from '../../assets/img/companies/building-logo-1.png'
import logo2 from '../../assets/img/companies/building-logo-2.png'
import logo3 from '../../assets/img/companies/building-logo-3.png'
import logo4 from '../../assets/img/companies/building-logo-4.png'
import logo5 from '../../assets/img/companies/building-logo-5.png'


export const Building = () => {
    return (
        <BuildingWrapper>
            <Container spaced padding='0 40px'>
                    <BigHeader>Build for growth.</BigHeader>
                    <Tabs>
                        <TabItem>NFTs</TabItem>
                        <TabItem>DeFi</TabItem>
                        <TabItem>Payments</TabItem>
                        <TabItem>Gaming</TabItem>
                        <TabItem>DAOs</TabItem>
                    </Tabs>
            </Container>

            <Container column gap={'20px'}>
                <Container centered gap={'14px'}>
                    <BuildingImage src={image1} alt="" />
                    <Container column align={'flex-start'} gap={'14px'} maxWidth={'550px'} padding='0 40px'>
                        <BuildingLogo src={logo1} alt="" />
                        <Text color={theme.fontColor.primary} fontSize='21px'>
                            It&#39;s time to bridge the digital and physical. Anybodies helps established brands like Toys&#39;R&#39;Us connect real-life places and <br/>products with NFTs.
                        </Text>
                        <Link color='purple' href="#">
                            Learn more about NFTs on Solana
                        </Link>
                    </Container>
                </Container>

                <Container centered borderedBox gap={'217px'} className={'padding'}>
                    <BuildingLogo src={logo2} alt="" />
                    <BuildingLogo src={logo3} alt="" />
                    <BuildingLogo src={logo4} alt="" />
                    <BuildingLogo src={logo5} alt="" />
                </Container>
            </Container>
        </BuildingWrapper>
    );
};


const TabItem = styled.button`
    font-size: 16px;
    color: ${theme.fontColor.primary};
    background-color: ${theme.buttonColor.bgColor};
    padding: 14px 13px;
    border: none;
    border-radius: 15px;
`

const BuildingWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    /* margin-bottom: 122px; */

    /* ${Container}:first-of-type {
        padding: 0 40px;
    } */

    .padding {
        max-width: 1120px;
        padding: 8px 82px;
    }
`
const Tabs = styled.div`
    ${TabItem} + ${TabItem} {
        margin-left: 16px;
    }

    ${TabItem}:last-child {
        margin-right: 24px;
    }
`


const BuildingImage = styled.img`
    min-width: 550px;
`

const Description = styled.div`
    min-width: 550px;
`

const BuildingLogo = styled.img``