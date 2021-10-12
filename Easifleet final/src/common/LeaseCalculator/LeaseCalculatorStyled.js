import styled from 'styled-components';
import {theme} from '../../theme';
export const LeaseCalculatorWrappper =  styled.div`
      
     .Lease-section{
        padding: 178px 132px;
     }
     .Include {
        margin-top:61px;
     }
     .Lease-heading{
        color:${theme.colors.easiblue};
        font-size: 60px;
        padding-right: 270px;
        font-family:${theme.fonts.Replica_bold};
        
     }
     .Lease-paragraph{
        color:${theme.colors.red};
        font-size: 16px;
        font-family:${theme.fonts.Replica_bold};
     }
     .Vehicle-size{
        background-color:${theme.colors.lightgrey};
        padding: 50px 50px;
        img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            height:auto;
            width:auto;
            vertical-align: middle;
        }
        p{
            color:${theme.colors.easiblue};
            font-size: 23px;
            font-family:${theme.fonts.Replica_Regular};

        }
        span{
           color: ${theme.colors.red};
           margin-left:5px; 
        }
        .drop-list{
            font-size:16px;
            font-family:${theme.fonts.Replica_bold};
            cursor: pointer;

            
        }
     }
     .set-items{
      padding-bottom:30px;
     }
     .Lease-images{  
         position:relative;
         img {
            position:absolute;
         }
         .icon1-img{
            right: 110px;
            top: 600px;
         }
         .icon2-img{
            left: 10px;
            z-index: -1;
         }
         .icon3-img{
            right: -132px;
            top: 300px;
         }
         .icon4-img{
            right: -82px;
            top: 360px;
            }
         .icon5-img{
            right: 150px;
            top: 700px;
         }
      
      }
     h2 {
      color:${theme.colors.easiblue};
      font-size: 26px;
      font-family:${theme.fonts.Replica_Regular};
      text-align: left;
      margin-left:15px;

     }
     
     .Lease-button{
         margin-left: auto;
         margin-right: auto;
        p{
         max-width: 298px;
         margin-right: auto;
         margin-left: auto;
         margin-top: 30px;
         font-size: 14px;
         font-family:${theme.fonts.Replica_Regular};
         color:${theme.colors.easiblue};


     
        }
     }
     .sticky {
      position: -webkit-sticky;
      position: fixed;
      z-index:10;
      width:35%;
     }
     .fixedPos {
      position: -webkit-sticky;
      position: absolute;
      top: 1100px;
      z-index:10;
      width:100%;
      right:-5px;
     }
     ${theme.mediaQueriesMaxWidth.ipadpro} {
      .Lease-section{
         padding: 100px 50px;
      }   
      .Lease-heading{
         font-size: 50px;
         padding-right: 150px;
         }
      .Lease-images{  
          .icon3-img{
            right: -100px;
        }
         .icon5-img  {
            right: 80px;
            top: 525px;
         }
         .icon2-img {
            left: -50px;
         }
          }
          
      }
     }
     ${theme.mediaQueriesMaxWidth.md}{
      .Lease-section{
         padding: 50px 50px;
      } 
     .Lease-heading{
      font-size: 35px;
      padding-right: 150px;
      }
     
      .Vehicle-size {
         padding: 20px 20px;
         }
         .Lease-images{  
            position:relative;
            img{ display:none;}
         }
     }

     }
     ${theme.mediaQueries.md}{
      .set-items{
         display:none;
        }
     }
     ${theme.mediaQueriesMaxWidth.sm}{
      .Include {
         text-align:center;
      }
      .sticky {
         position: -webkit-sticky;
         position: fixed;
         bottom: 0;
         z-index:10;
         width:92%;
        }
      .fixedPos {
         position: -webkit-sticky;
         position: absolute;
         top:-500px;
         z-index:10;
         width:100%;
         right:-5px;
        }
      .Lease-heading{
         color:${theme.colors.easiblue};
         font-size: 33px;
         padding-right: 0px;
      }
      .Lease-section{
         padding: 130px 15px 59px 15px;
      }
      
      .Vehicle-size {
         padding: 20px 20px;
         img{
            display: block;
            margin-left: auto;
            margin-right: auto;
            height:auto;
            width:300px;
            vertical-align: middle;
        }
         p{
               color:${theme.colors.easiblue};
               font-size: 19px;
               font-weight:normal;
            }
         }
         .Lease-images{  
            position:relative;
            img{ display:none;}
         }
     }
     ${theme.mediaQueries.sm}{
      .set-items{
         display:none;
        }

     }
   
`;

export const CardFlex = styled.div`
   padding-left:20px;
   justify-content:center;
   display:flex;
   flex-wrap:wrap;
   ${theme.mediaQueriesMaxWidth.sm}{
      display:none;
   }
`
