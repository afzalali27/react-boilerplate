import styled from 'styled-components';
import {theme} from '../../theme';
export const MeterWrappper =  styled.div`


        background: ${theme.colors.easiblue};
        width: 345px;
        height: 120px;
        box-shadow: 0px 4px 30px rgba(40, 39, 129, 0.15);
        border-radius: 15px;
        padding:1px 25px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 100px;
        p {
            color:${theme.colors.white};
            font-size: 14px;
            font-family:${theme.fonts.Replica_bold};
            margin-left:20px;
        }
        h4 {
            color:${theme.colors.white};
            font-size: 23px;
            margin: 5px;
        }
        span {
            color:${theme.colors.easiblue};
            font-family:${theme.fonts.Replica_bold};
            background: ${theme.colors.white};
            padding: 0px 10px;
            font-size:39px;
            margin: 3px;
        }
        .flex-style{
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
        }
        ${theme.mediaQueriesMaxWidth.md}{
            width:auto;
            p{
                margin-left:10px;

            }
            span {
                padding: 0px 7px;
            }
        }
        ${theme.mediaQueriesMaxWidth.sm}{
            width: auto;
        }
   
`;

