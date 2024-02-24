import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";

type ContainerPropsType = {
    centered?: boolean
    spaced?: boolean
    column?: boolean
    borderedBox?: boolean

    padding?: string
    gap?: string
    justify?: string
    align?: string
    className?: string
    maxWidth?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: ${props => props.maxWidth || '1200px'};
    width: 100%;
    display: flex;
    gap: ${props => props.gap || '0px'};
    padding: ${props => props.padding || '0'};

    ${props => props.centered && css<ContainerPropsType>`
        justify-content: center;
        align-items: center;
    `}

    ${props => props.spaced && css<ContainerPropsType>`
        justify-content: space-between;
        align-items: center;
    `}

    ${props => props.column && css<ContainerPropsType>`
        flex-direction: column;
        justify-content: ${props => props.justify || 'center'};
        align-items: ${props => props.align || 'center'};
    `}

    ${props => props.borderedBox && css<ContainerPropsType>`
        border-radius: 12px;
        background-color: ${theme.boxColor.darkBg};
    `}
`