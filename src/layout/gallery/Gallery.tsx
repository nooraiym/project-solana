import React from 'react';
import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { BigHeader } from '../../components/BigHeader';
import { Button } from '../../components/Button';

import galleryBg from '../../assets/img/building-bg.jpg'

export const Gallery = () => {
    return (
        <GalleryWrapper>
            <Container column align='flex-start' gap='35px' padding='125px 40px'>
                <BigHeader maxWidth='500px'>Join a thriving community.</BigHeader>
                <ImageGallery></ImageGallery>
            </Container>

            <Container column gap='18px' padding='0 0 208px'>
                <BigHeader maxWidth='730px' align='center'>
                    It's time to join the thousands of creators, artists, and developers using Solana.
                </BigHeader>
                <Button>Start building</Button>
            </Container>
        </GalleryWrapper>
    );
};


const GalleryWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(${galleryBg});
    background-size: 1120px 1120px;
    background-position: center 125px;
    background-repeat: no-repeat;
`

const ImageGallery = styled.div`
    height: 420px;
`