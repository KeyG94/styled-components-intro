import styled from 'styled-components';

const ParagraphText = styled.p`
    font-size: 16px;
    text-align: center;
    font-color: #1C1B1B;

    &:after {
        content: 'Fusce id libero ut orci ornare tempor sit amet at augue.';
    }
`;

export default ParagraphText;