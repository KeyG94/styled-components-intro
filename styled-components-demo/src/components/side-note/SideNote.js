import styled from 'styled-components';

const SideNoteText = styled.p`
    background-color: white;
    text-align: center;
    max-width: 90%;
    margin: 1em auto;
    padding: 1em;
    border-radius: ${(props) => props.theme.borderRadius};

    &:after{
        content: 'Fusce id libero ut orci ornare tempor sit amet at augue.';
        font-size: ${(props) => props.theme.fontSize};
    }
`


export default SideNoteText;