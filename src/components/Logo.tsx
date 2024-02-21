import React from 'react';
import { styled } from 'styled-components';

import logo from '../assets/img/logo.png'
// import logo2x from '../../assets/img/logo@2x.png'
// import logo3x from '../../assets/img/logo@3x.png'

export const Logo = () => {
    return (
        <LogoWrapper>
            {/* <source srcSet='' /> */}
            <img src={logo} alt="Solana logo" />
        </LogoWrapper>
    );
};

const LogoWrapper = styled.picture``




// Как подключить srcSet для разных дисплеев?