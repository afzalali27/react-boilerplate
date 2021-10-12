import styled from 'styled-components';
import {theme} from '../../theme';
export const Button =  styled.button`
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        font-family:${theme.fonts.Replica_bold};
        font-size:14px;
        background-color:${props=>props.bg ? props.bg : props.theme.colors.red};
        color:${theme.colors.white};
        border: 2px solid ${props=>props.bg ? props.bg : props.theme.colors.red};
        border-radius:5px;
        min-width:${props=>props.md? '315px' : '214px'};

        height: 60px;
        text-align: center;
        margin-top: ${props =>props.margin ? props.margin : "0px" } ;
        ${ props => props.fullWidth && `
            width:100%;
        `}
        ${theme.mediaQueriesMaxWidth.ipadpro} {
                min-width:${props=>props.md? '200px' : '270px'};
        }
        ${theme.mediaQueriesMaxWidth.sm} {
                ${ props => props.margin && `
                    margin-top:30px;
                `}
                min-width:${props=>props.lg? '100%' : '270px'};
        }

`;