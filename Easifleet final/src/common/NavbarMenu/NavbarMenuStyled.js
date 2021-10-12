import styled from 'styled-components';
import {theme} from '../../theme';
export const NavbarWrapper =  styled.div`

        
       
        .top-bar {
          transform: rotate(45deg)!important;
          transform-origin: 10% 10%;
        }
        .middle-bar {
          display:none !important;
        }
        .bottom-bar {
          transform: rotate(-45deg)!important;
          transform-origin: 10% 90%;
        }
        .Sidebar-Heading{
          font-size:19px;
          font-family:${theme.fonts.Replica_Regular};

        }
        #header {
         
         }
        .pro-sidebar .pro-menu {
            background-color: #F4F4F4;
         }
        }
        #header .closemenu {
          color: #000;
          position: relative;
          right: 0;
          z-index: 9999;
          line-height: 20px;
          border-radius: 50%;
          font-weight: bold;
          font-size: 22px;
          top: 55px;
          cursor: pointer;
          
        }
        #header .pro-sidebar {
          display: block;
          position: fixed;
          top: 80px;
          right: 0;
          bottom: 0;
          width: 300px;
          min-height: 100vh;
          padding: 15px 0;
          background-color: #F4F4F4;
          border-left: 1px solid #dbdada;
          transition: all 0.4s ease;
          overflow-y: auto;
          z-index: 899;
        }
        #header .pro-sidebar.collapsed {
          transition: all 0.4s ease;
          right: -300px;
          background-color: transparent;
          border-left: none;
          z-index:-1;
        }
        #header .pro-sidebar-inner {
          background-color: white;
          box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);
        }
        #header .pro-sidebar-inner .pro-sidebar-layout {
          overflow-y: hidden;
        }
        #header .pro-sidebar-inner .pro-sidebar-layout .logotext p {
          font-size: 20px;
          padding: 0 20px;
          color: #000;
          font-weight: bold;
        }
        #header .pro-sidebar-inner .pro-sidebar-layout ul {
          padding: 0 5px;
        }
        #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item {

          display: block;
          color: #313131;
          text-transform: uppercase;
          font-weight: 500;
          font-size: 12px;
          font-family:${theme.fonts.Replica_Regular};

        }
        #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item .pro-icon-wrapper {
          color: #000;
          border-radius: 3px;
        }
        #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item .pro-icon-wrapper .pro-item-content {
          color: #000;
        }
        #header .pro-sidebar-inner .pro-sidebar-layout .active {
          background-image: linear-gradient(0deg, #fece00 0%, #ffe172 100%);
        }
        #header .logo {
          padding: 20px;
        }

        @media only screen and (max-width: 720px) {
          html {
          overflow: hidden;
          }
        }
     .navbar{
      position: fixed;
      right: 0;
      left: 0;
      z-index:899;
     }
    nav{  
        background-color : ${theme.colors.red};
        min-height: 80px;
        .navbar-brand {
          color : ${theme.colors.white} !important;
        }
    
        .navbar-toggle {
            display: block;
         }
        .nav-link {
            color : ${theme.colors.white} !important;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: .4px;

           }
           
        .navbar {
         
          .navbar-collapse{
              height:100px;
              

          }
         }
        .logo {
          display: block;
          width: 140px;
          height: 48px;
          background: url(/Images/logo.svg) 0 0/140px 48px;
          float: left;
         }
        .animated-icon {
            width: 30px;
            height: 20px;
            position: relative;
            margin: 0px;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .5s ease-in-out;
            -moz-transition: .5s ease-in-out;
            -o-transition: .5s ease-in-out;
            transition: .5s ease-in-out;
            cursor: pointer;
            }
          .animated-icon span {
            display: block;
            position: absolute;
            height: 3px;
            width: 31px;
            border-radius: 9px;
            opacity: 1;
            left: 0;
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
            -webkit-transition: .25s ease-in-out;
            -moz-transition: .25s ease-in-out;
            -o-transition: .25s ease-in-out;
            transition: .25s ease-in-out;
            }
          .animated-icon span {
            background: #E3F2FD;
          }
          .animated-icon span:nth-child(1) {
            top: 4px;
          }
          .animated-icon span:nth-child(2), .animated-icon span:nth-child(3) {
            top: 12px;
          }
          .animated-icon span:nth-child(4) {
            top: 20px;
          }
          .animated-icon.open span:nth-child(1) {
            top: 11px;
            width: 0%;
            left: 50%;
          }
          .animated-icon.open span:nth-child(2) {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
          }
          .animated-icon.open span:nth-child(3) {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
          }
          .animated-icon.open span:nth-child(4) {
            top: 11px;
            width: 0%;
            left: 50%;
          }
          .navbar-toggler {
              border: none;
           }
          .d-inline-flex {
            margin-right:30px;
           } 
          .phone {
            display: none;
            width: 100%;
            height: auto;
            float: left;
           }
          
      }
      ${theme.mediaQueriesMaxWidth.sm} {
        #header .pro-sidebar {
       
          width: 100%;
          transition: all 0.4s ease;
        }
        #header .pro-sidebar.collapsed {
         
          padding-left: 100%;
          transition: all 0.4s ease;
        }
        nav{
          background-color : ${theme.colors.red};
          min-height: 80px;
          .phone {
            margin-top:5px;
            display: block;
            width: 100%;
            height: auto;
            float: left;
           }
           .nav-link {
             display: none;
            color : ${theme.colors.white} !important;
            font-size: 15px;
            font-weight: 500;
            letter-spacing: .4px;

           }
         }
    
       }
   
     
   
`;

