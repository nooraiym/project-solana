import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const Button = styled.button`
    border: none;
    border-radius: 32px;
    padding: 16px 32px;
    background-image: linear-gradient(45deg, ${theme.buttonColor.first}, ${theme.buttonColor.second});

    font-size: 15px;
    text-transform: uppercase;

    &:hover {
        outline: 1px solid ${theme.fontColor.primary};
        background: none;
    }
`