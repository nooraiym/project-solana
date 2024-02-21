import React from 'react';
import { styled } from 'styled-components';
import { Announcement } from '../../components/Announcement';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/Container';

import image1 from '../../assets/img/companies/image-1.png'
import image2 from '../../assets/img/companies/image-2.png'
import image3 from '../../assets/img/companies/image-3.png'
import image4 from '../../assets/img/companies/image-4.png'
import image5 from '../../assets/img/companies/image-5.png'
import image6 from '../../assets/img/companies/image-6.png'
import image7 from '../../assets/img/companies/image-7.png'

export const Companies = () => {
    return (
        <CompaniesWrapper>
            <Announcement color={theme.fontColor.extra} marginBottom={'26px'}>
                Powering tools and integrations from companies all around the world
            </Announcement>
            <Container centered gap={'40px'}>
                <img src={image1} alt="logo" />
                <img src={image2} alt="logo" />
                <img src={image3} alt="logo" />
                <img src={image4} alt="logo" />
                <img src={image5} alt="logo" />
                <img src={image6} alt="logo" />
                <img src={image7} alt="logo" />
            </Container>
        </CompaniesWrapper>
    );
};

const CompaniesWrapper = styled.section`
    padding: 0 0 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
`