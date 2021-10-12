import './utils/helpers';
import React,{useState} from 'react';
import { Router } from '@reach/router';
import {NavbarMenu} from './common/NavbarMenu/NavbarMenu';
import './App.css';
import { Footer } from './common/Footer/Footer';
import {Homepage} from "./common/Homepage/Homepage";
import { LeaseCalculator } from './common/LeaseCalculator';
import {Quote} from './common/Quote';
import GlobalStyles from './styles/base';
import HttpsRedirect from 'react-https-redirect';
import {theme}  from './theme';
import './styles/App.scss';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import {AppWrapper} from './styles/AppStyled';

function App() {
  const [menuCollapse, setMenuCollapse] = useState(true);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <GlobalStyles />          
            <NavbarMenu
             menuCollapse={menuCollapse}
             setMenuCollapse={setMenuCollapse}
            />
            <AppWrapper menuCollapse={menuCollapse}>
              <HttpsRedirect>
                <Router>
                  <Homepage 
                  //  menuCollapse={menuCollapse}

                  path='/'/>
                  <LeaseCalculator 
                  // menuCollapse={menuCollapse}
                  
                  path='lease-calculator'/>
                  <Quote
                  // menuCollapse={menuCollapse}
                  path='quote'/>
                </Router>
              </HttpsRedirect>
              <Footer
                // menuCollapse={menuCollapse}
              />
            </AppWrapper>
            
            <ToastContainer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
