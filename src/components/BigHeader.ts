import { css, styled } from "styled-components";

type BigHeaderPropsType = {
    positioned?: boolean
    marginTop?: boolean

    maxWidth?: string
    align?: string
}

export const BigHeader = styled.h2<BigHeaderPropsType>`
    font-size: 38px;
    max-width: ${props => props.maxWidth || '300px'};
    width: 100%;
    word-spacing: 2px;
    text-align: ${props => props.align || 'left'};

    ${props => props.positioned && css<BigHeaderPropsType>`
        margin: 78px 0 0 44px;
    `}

    ${props => props.marginTop && css<BigHeaderPropsType>`
        margin: 78px 0 8px;
    `}
`