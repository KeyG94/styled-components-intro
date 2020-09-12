import styled from 'styled-components';

const FormMargin = styled.form`
    background-color: rgba(255,255,255,0.65);
    width: 80%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadius};
`

export default FormMargin;

export const FormContainer = styled(FormMargin)`
    background-color: rgba(255,255,255,0);
`;

