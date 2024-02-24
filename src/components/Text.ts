import { styled } from "styled-components";
import { theme } from "../styles/Theme";

type TextPropsType = {
    color?: string
    fontSize?: string
}

export const Text = styled.p<TextPropsType>`
    font-size: ${props => props.fontSize || '18px'};
    line-height: 1.5;
    color: ${props => props.color || theme.fontColor.alternate};
`