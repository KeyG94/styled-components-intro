import styled from 'styled-components';

const InputForm = styled.input`
    width: 100%;
    border: 1px solid ${(props) => props.theme.colours.border};
    border-radius: ${(props) => props.theme.borderRadius};
    padding: 1.8em;
    margin: 1em auto 1em;

    &::placeholder{
        color: ${(props) => props.theme.colours.placeholder};
        opacity: 0.7;
        font-size: 16px;
        font-family: ${(props) => props.theme.fontFamily}
    }
`


export default InputForm