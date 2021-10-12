import styled from 'styled-components';
import {theme} from '../../theme';
export const Button =  styled.button`
        border: none;
        color: white;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        transition-duration: 0.4s;
        cursor: pointer;
        font-family:${theme.fonts.Replica_bold};
        font-size:14px;
        background-color: white; 
        color:${props=> props.danger ? theme.colors.red : theme.colors.easiblue};
        border: 2px solid ${props=> props.danger ? theme.colors.red : theme.colors.easiblue};
        :hover {
            background-color: ${props=> props.danger ? theme.colors.red : theme.colors.easiblue};
            color: white;
          }
        ${ props => props.isActive && `
            background-color: ${props.danger ? theme.colors.red : theme.colors.easiblue};
            color: ${props.danger ? theme.colors.red : theme.colors.white};
        `}
        border-radius:${props=> props.round ? '30px' : '5px'};
        ${theme.mediaQueriesMaxWidth.ipadpro} {
          min-width:${props=>props.lg? '200px' : props.sm? '132px' :'270px'};
        }
        ${theme.mediaQueriesMaxWidth.sm} {
        min-width:${props=>props.lg? '270px' : props.sm? '132px' : '132px'};
        height: ${props=>props.lg? '60px': props.sm? '45px': '45px'};
        }
        
        min-width:${props=>props.lg? '315px' : '132px'};
        height: ${props=>props.lg? '60px': '45px'};

        box-sizing: border-box;
        text-align: center;


`;