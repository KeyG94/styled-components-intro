import styled from 'styled-components';

const SpeciaDeal = styled.div`
    height: 80px;
    width: 80px;
    text-align: center;
    border: 3px solid white;
    border-radius: 100%;
    position: absolute;
    right: 10px;
    top: 10px;
    color: white;
    font-weight: bold;
    font-size: 16px;
    background-color: ${(props) => props.theme.colours.accent};
    box-shadow: ${(props) => props.theme.colours.shadow};

    &:after{
        content: 'Special';
        justify-content: center;
        display: flex;
        margin-top: 36%;
        transform: rotate(40deg);
    }

    @media screen and (min-width: ${(props) => props.theme.widths.small}){
        height: 110px;
        width: 110px;

    }

    @media screen and (min-width: ${(props) => props.theme.widths.medium}){
        height: 110px;
        width: 110px;
        top: 10%;
        right: 10%;

    }
`

export default SpeciaDeal;