import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body{
        max-height: 100%;
        font-family: 'Open Sans', sans-serif;
        background-color: ${(props) => props.theme.colours.background};
        @media screen and (min-width: ${(props) => props.theme.widths.small}){
            max-width: 500px;
            margin: 0 auto;
        }
    }

    p {
        font-weight: regular;
        font-size: 16px;
    }
`;

export default GlobalStyle;