import { css, styled } from "styled-components";
import { theme } from "../styles/Theme";

type LinkPropsType = {
    color?: 'purple' | 'green'
}

export const Link = styled.a<LinkPropsType>`

    ${props => props.color === 'purple' && css<LinkPropsType>`
        font-size: 20px;
        color: ${theme.fontColor.link};

        &:hover {
        text-decoration: underline;
    }
    `}

    ${props => props.color === 'green' && css<LinkPropsType>`
        font-size: 18px;
        color: ${theme.fontColor.additional};
        text-decoration: underline;
    `}
`