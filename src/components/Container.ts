import { css, styled } from "styled-components";

type ContainerPropsType = {
    centered?: boolean
    spaced?: boolean
    column?: boolean
    gap?: string
}

export const Container = styled.div<ContainerPropsType>`
    max-width: 1200px;
    width: 100%;
    display: flex;
    gap: ${props => props.gap || '0px'};

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
        justify-content: center;
        align-items: center;
    `}
`