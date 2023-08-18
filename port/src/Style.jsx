import styled,{ keyframes } from 'styled-components';

//keyframes
const spinAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

//Styled components
export let theme = {
    primary:'#F7FFFF',
    background:'#9FF8A8',
    Font:'#032200',
    Font2:'#217a19'
}
export let Font = {
    Fprimary:"'Lemonada', cursive",
}
export let Avatar = styled.div`
    border-radius: 100%;
    background: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: ${props => props.length};
    min-height: ${props => props.length};
    background-color: ${props => props.colorBackground};
    & .full{
        width: 100%;
        height: 100%;
        border-radius: 100%;
    }
    & img{
        width: calc(${props => props.length} - 35px);
        height: calc(${props => props.length} - 35px);
    }
    @media (max-width:952px) {
        min-width: calc(${props => props.length} - 35px);
        min-height: calc(${props => props.length} - 35px);
        & img{
            width: calc(${props => props.length} - 70px);
            height: calc(${props => props.length} - 70px);
        }
    }
    @media (max-width:425px) {
        min-width: calc(${props => props.length} - 70px);
        min-height: calc(${props => props.length} - 70px);
        & img{
            width: calc(${props => props.length} - 105px);
            height: calc(${props => props.length} - 105px);
        }
    }
`
export let Spinner = styled.div`
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 4px solid ${theme.Font};
    border-top-color: ${theme.background};
    border-radius: 50%;
    animation: ${spinAnimation} 1s linear infinite;
`;

export let Card = styled.div`
    color: ${props => props.colorFont};
    background-color: ${props => props.colorBackground};
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
    align-items: center;
    border-radius: 8px; 
    width: 100%;
    box-shadow: 0 0 20px #00000061;
    height: 800px;
    & h1,h2{
        margin: 0;
        padding: 0;
    }
    & p{
        width: 70%;
        text-align: center;
    }
    @media (max-width:1204px) {
        & h1,h2{
            font-size: 18px;
        }
        & p{
            font-size: 15px;
        }
    }
    @media (max-width:875px) {
        height: fit-content;
    }
    @media (max-width:375px) {
        & h1,h2{
            font-size: 14px;
        }
        & p{
            font-size: 9px;
        }
    }
`
export let Body = styled.body`
    background-color: ${theme.background};
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    & h1{
        padding: 0;
        margin: 0;
    }
    & .content{
        background-color: ${theme.primary};
        width: 70%;
        min-height: 300px;
        height: min-content;
        border-radius: 8px; 
        box-shadow: 8px 8px 3px #00000043;
        padding: 30px;
        color: ${theme.Font};
        font-family: ${Font.Fprimary};
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        @media (max-width:952px) {
            min-height: 200px;
        }
        @media (max-width:622px) {
            width: 80%;
        }
        & .grid{
            display: grid;
            grid-template-columns: auto auto;
            gap: 30px;
            @media (max-width:875px) {
                grid-template-columns: auto;
            }
        }
        & .col{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
            & .row{
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                gap: 10px;
            }
            @media (max-width:952px) {
                & h1{
                    font-size: 18px;
                }
                & p{
                    font-size: 15px;
                }
            }
        }
        & .colCenter{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
        }
        & .icon{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 0;
            padding: 0;
            height: 40px;
            width: 40px;
            font-size: 20px;
            text-decoration: none;
            color: ${theme.Font};
            background: none;
            cursor: pointer;
            border: none;
            transition: 200ms;
            &:hover{
                color: ${theme.Font2};
            }
            @media (max-width:952px) {
                height: 30px;
                width: 30px;
                font-size: 17px;
            }
        }
    }
`