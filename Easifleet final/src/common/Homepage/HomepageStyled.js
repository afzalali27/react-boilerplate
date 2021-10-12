import styled from 'styled-components';
import {theme} from '../../theme';
export const HomepageWrappper =  styled.div`
        .home-heading{
            color: ${theme.colors.easiblue};
            font-family:${theme.fonts.Replica_bold};
            font-size:60px;
            max-width:546px;
        }
        .home-heading2{
            font-size: 23px;
            color: ${theme.colors.easiblue};
            font-family:${theme.fonts.Replica_Regular};
            font-weight:400;
            max-width: 442px;
        }
        .heading-color{
            color: ${theme.colors.red};
        }
        .p-color{
            font-size: 14px !important;
        }
        .Homepage-section{
            padding: 178px 132px 0px 132px;

            p{
                margin-top:39px;
                color: ${theme.colors.easiblue};
                font-size: 23px;
                font-Weight:400;
            }
            
        }
        .bottom-banner {
            position: relative;
            img{
                margin-left: auto;
                display: block;
                margin-bottom: -8px;
                margin-right: 50px;
            }
        }
        .Homepage-images{  
            position:relative;
            img {
                position:absolute;
            }
            .icon1-img{
                right: 70px;

            }
            .icon2-img{
                right: 150px;
                top:80px;

            }
            .icon3-img{
                right: -132px;
                top: 230px;
            }
            .icon4-img{
                top: 215px;
                right: 240px;
            }
            
        }
        ${theme.mediaQueriesMaxWidth.ipadpro} {
            .Homepage-section{
                padding: 228px 50px;
            }  
            .Homepage-images{  
                .icon3-img{
                    right: -50px;
                    top: 230px;
                }
                
            }
           }
            ${theme.mediaQueriesMaxWidth.md }{
            .Homepage-section{
                padding: 178px 50px;
            }  
            .Homepage-images{  
                .icon3-img{
                    right: -50px;
                    top: 230px;
                }
                
            }
           }
        ${theme.mediaQueriesMaxWidth.sm} {
            .home-heading{
                color: ${theme.colors.easiblue};
                font-family:${theme.fonts.Replica_bold};
                font-size:39px;
            }
            .Homepage-section{
                padding: 130px 30px 59px 30px;
            }
            .Homepage-images{  
               display:none;
                
            }
            .bottom-banner {
                display:none;
            }
        }



     
 
   
     
   
`;

