import styled from 'styled-components';
import {theme} from '../../theme';


export const BreakdownWrappper =  styled.div`
      padding: 50px 50px;
      margin-top: 15px;
      background-color:${theme.colors.lightgrey};
      padding :23px 30px 0px 30px;
      position: relative;
      padding: 30px;
      border-radius: 0 0 3px 3px;
      tr{
         border-top: 1px solid #ffffff;

      }
      th {
         border-bottom: 1px solid #ffffff;
         text-align: center;
         border-top: 1px solid #ffffff;
         color:#6d6e71;
         padding: 10px 0;  
      }
      td{
         border-bottom: 1px solid #ffffff;
         text-align: center;
         border-top: 1px solid #ffffff;
         color:#6d6e71;
         padding: 10px 0;  
      }
      
      th:first-child {
         text-align: left;
         width: 40%;
         margin-left:0px;
         h2 {
            font-size: 2em;
            margin-left:0px;
            color:#6d6e71
        }
      }
     .final {
        td 
        {
        color : ${theme.colors.red};
        border-top: 1px solid  ${theme.colors.red};
        border-bottom: 1px solid  ${theme.colors.red};
        }
     }
     h3 {
      font-size: 1.2em;
      color:#6d6e71
      }
     .pack-w{
      padding-left:200px;
     }
     .npack-w{
      padding-left:0px;

     }
     ${theme.mediaQueriesMaxWidth.sm}{
         display:none;
     }
    


`