import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { Text } from '../../components/Text';
import { Socials } from '../../components/Socials';


export const Footer = () => {
    return (
        <FooterWrapper>
            <Container spaced>
            <Container column>
                <FooterLogo>
                    <use href='../../assets/icons/icons-sprite.svg#footerLogo'/>
                </FooterLogo>
                <Text>
                    Managed by Solana Foundation
                </Text>
                <Socials />
                <Text>
                    &#169; 2023 Solana Foundation. All rights reserved.
                </Text>
            </Container>

            <Container centered>
                <Container column></Container>
                <Container column></Container>
                <Container column></Container>
            </Container>
            </Container>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer``
const FooterLogo = styled.svg``