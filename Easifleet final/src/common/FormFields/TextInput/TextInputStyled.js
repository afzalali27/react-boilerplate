import styled from 'styled-components';
import {theme} from '../../../theme';

export const TextInputWrappper =  styled.div`
    position:relative;
    padding-bottom: 1px;
    margin-bottom: 5px;
    width:${props=>props.fullWidth ? '100%' : '350px'};
    ${theme.mediaQueriesMaxWidth.sm}{
        width:${props=>props.fullWidth ? '100%' : '100%'};
    }
`;

export const InputWrappper =  styled.div`

    position:relative;
    margin-bottom:25px;
    input {
        width:100%;
        height:45px;
        border: 1px solid #D5D5E5;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 10px 25px;
    }
    span {
        margin-bottom:25px;
        position:absolute;
        z-index:1;
        margin-top:10px;
        padding-right:15px;
        svg{
            height:18px;
            width:18px;
        }
    }
    width: 100%;
          
`;