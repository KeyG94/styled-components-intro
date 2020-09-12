import styled from 'styled-components';

const ConfirmButton = styled.button`
    width: 100%;
    height: 75px;
    border-radius: ${(props) => props.theme.borderRadius};
    border: none;
    background-color: ${(props) => props.theme.colours.primary};
    color: white;
    font-size: 16px;
    box-shadow: ${(props) => props.theme.colours.shadow};
    margin: 1em auto;

    &:after {
        content: 'Pay';
    }

    &:hover{
        box-shadow: none;
        border: 1px solid white;
    }
`

export default ConfirmButton;