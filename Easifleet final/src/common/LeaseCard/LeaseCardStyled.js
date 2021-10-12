import {theme} from '../../theme';
import styled from 'styled-components';
export const LeaseCardWrappper =  styled.div`

    .card-text:last-child
    {
        font-size:10px;
        color:${theme.colors.easiblue};
        font-family:${theme.fonts.Replica_Regular};
    }
     .card-title {
        font-size:19px;
        color:${theme.colors.easiblue};
        font-family:${theme.fonts.Replica_Regular};
        margin:0;
     }
     .card{
        border-radius: 10px;
        box-shadow: 0px 4px 30px rgba(40, 39, 129, 0.15);
        margin-top:20px;
        width:150px;
        height:150px;
        align-items: center;
        padding:26px 0px 0px 0px;
        img{
            height: 55px;
            width: 55px;
        }
     }
     .card-body{
         text-align:center;
         padding-top:12px;
        
     }


   
`;

