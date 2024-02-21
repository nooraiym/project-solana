import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    /* roboto-regular - cyrillic_latin */
    @font-face {
    font-display: swap;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('../assets/fonts/roboto-v30-cyrillic_latin-regular.woff2') format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */
        url('../assets/fonts/roboto-v30-cyrillic_latin-regular.woff') format('woff'), /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+, iOS 5+ */
        url('../assets/fonts/roboto-v30-cyrillic_latin-regular.ttf') format('truetype'), /* Chrome 4+, Firefox 3.5+, IE 9+, Safari 3.1+, iOS 4.2+, Android Browser 2.2+ */
        url('../assets/fonts/roboto-v30-cyrillic_latin-regular.svg') format('svg'); /* Legacy iOS */
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
    margin: 0;
    font-family: Arial, Helvetica,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${theme.colors.bgprimary};
    color: ${theme.fontColor.primary};
    font-weight: 400;
    line-height: 1.2;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1, h2, h3, h4, h5 {
        font-weight: 400;
    }

    h5 {
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
    }

`