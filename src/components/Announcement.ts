import { styled } from "styled-components";
import { theme } from "../styles/Theme";

type AnnouncementPropsType = {
    color?: string
    marginBottom?: string
}

export const Announcement = styled.h5<AnnouncementPropsType>`
    font-size: 17px;
    color: ${props => props.color || theme.fontColor.primary};
    margin-bottom: ${props => props.marginBottom || '0'};
`