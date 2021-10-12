import styled from 'styled-components';
import {theme} from '../../theme';
export const QuoteWrappper =  styled.div`
      
     .quote-section{
        padding: 178px 100px;
        p{
         color:${theme.colors.easiblue};
         font-size: 19px;
         padding: 0px 20px;
         }
         .backbutton {
            margin-left: -550px;
            ${theme.mediaQueriesMaxWidth.sm}{
                margin-left: -300px;
            
            }
        
         }
         justify-content: center;
         display: flex;
     }
     .quote-heading{
        color:${theme.colors.easiblue};
        font-size: 60px;
        padding-right: 500px;
        padding: 0px 20px;
     }
     .quote-paragraph{
         padding:    0px 20px;
        color:${theme.colors.red} !important;
        font-size: 16px;
        font-weight: bold;
     }
     
     .form-style{
        padding: 20px 20px;
        p{
            color:${theme.colors.easiblue};
            font-size: 23px;
        }
        span{
           color: ${theme.colors.red};
           margin-left:5px; 
        }
      
         }
     
      }
     h2 {
      color:${theme.colors.easiblue};
      font-size: 26px;
      font-weight:bold;
     }
     
     .quote-button{
      padding-left: 20px;
     }
     .btn-style{
        margin-top:10px;
     }
     ${theme.mediaQueriesMaxWidth.sm}{
      .quote-button{
         padding-left: 0px;
        }
      .quote-heading{
         color:${theme.colors.easiblue};
         font-size: 33px;
         padding-right: 0px;
      }
      .quote-section{
         padding: 130px 15px 59px 15px;
      }
      
      .form-style {
         p{
               color:${theme.colors.easiblue};
               font-size: 19px;
               font-weight:normal;
            }
         }
     }
   
`;

