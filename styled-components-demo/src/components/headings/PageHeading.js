import styled from 'styled-components';

const PageHeading = styled.h1`
    color: ${(props) => props.theme.colours.primary};
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    padding: 2em;
    margin-top: 2em; 

    &:after {
        content: 'Payment Details';
    }
`;

export default PageHeading;