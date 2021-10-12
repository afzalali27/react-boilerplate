import styled from 'styled-components';
import {theme} from '../../../theme';
export const RangeSliderWrappper =  styled.div`

        margin-top: 15px;
        background-color:${theme.colors.lightgrey};
        padding: 23px 30px;
        p{
            font-size:23px;
            font-family:${theme.fonts.Replica_Regular};
            color:${theme.colors.easiblue};
            

        }
        h3{
            margin-top:25px;
            font-size:26px;
            color:${theme.colors.easiblue};
            font-family:${theme.fonts.Replica_bold};

        }    
        ${theme.mediaQueriesMaxWidth.md}{
            padding: 25px 25px;
            p{
                font-size: 21px;
            }
        }
        ${theme.mediaQueriesMaxWidth.sm}{
            padding: 28px 15px;
            h3{
                margin-top:15px;
                font-size:23px;
                color:${theme.colors.easiblue};
                font-family:${theme.fonts.Replica_bold};
    
            }   
            p{
                font-size:19px;
                font-weight:normal;
                color:${theme.colors.easiblue};
            }
        }

   
`;

