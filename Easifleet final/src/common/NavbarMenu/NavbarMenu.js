import React from 'react';
import {
  NavbarWrapper
} from './NavbarMenuStyled';
import {
  Navbar,
  Nav,
 
} from 'react-bootstrap';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

export const NavbarMenu = ({menuCollapse,setMenuCollapse}) => {
        const menuIconClick = () => {
          menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
        };
        
    return (
      <div>
      <NavbarWrapper>
        <Navbar expand="*">
            <Navbar.Brand href="/" className="logo"/>
              <div className="ml-auto d-inline-flex">
                <Nav.Link href="tel:1300%20266%20828">1300 266 828</Nav.Link>
                <Nav.Link href="#home">|</Nav.Link>
                <Nav.Link href="https://www.easifleet.com.au/contact-us/">Request a callback</Nav.Link>
                <Nav.Link href="http://members.easifleet.com.au/">Login</Nav.Link>
              </div>
              <div><img className="phone" alt="phone" src="/Images/phone.png"/></div>
              <div className="closemenu" onClick={menuIconClick}>
                            {/* changing menu collapse icon on click */}
                          {menuCollapse ? (
                             <button className="navbar-toggler nav-toggle-btn" type="button" aria-expanded="false"
                             aria-label="Toggle navigation">
                           
                             <div className="animated-icon"><span></span><span></span><span></span><span></span></div>
                           </button>
                             
                          ) : ( 
                            <button className="navbar-toggler nav-toggle-btn" type="button" aria-expanded="false"
                            aria-label="Toggle navigation">
                          
                            <div className="animated-icon"><span className="top-bar"></span><span className="middle-bar"></span><span className="middle-bar"></span><span className="bottom-bar"></span></div>
                          </button>
                          )}
              </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="#home">1300 266 828</Nav.Link>
                <Nav.Link href="#link">Request a callback</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
      </Navbar>
              <div id="header" >
                      {/* collapsed props to change menu size using menucollapse state */}
                    <ProSidebar collapsed={menuCollapse}>
                      <SidebarContent>
                        <Menu iconShape="square">
                          <MenuItem >
                            <h2 className="Sidebar-Heading">Home</h2>
                          </MenuItem>
                          <MenuItem >All Inclusive Car Finance</MenuItem>
                          <MenuItem >Novated Lease Calculator</MenuItem>
                          <MenuItem >Novated Lease</MenuItem>
                          <MenuItem >Business Car Leasing</MenuItem>
                          <MenuItem >EasiBuy</MenuItem>
                          <MenuItem >Salary Packaging</MenuItem>
                          <MenuItem >Fleet Management</MenuItem>
                          <hr/>
                          
                          <MenuItem ><h2 className="Sidebar-Heading">CAR DEALS</h2></MenuItem>
                          <hr/>
                          <MenuItem ><h2 className="Sidebar-Heading">RESOURCES</h2></MenuItem>
                          <hr/>
                          <MenuItem >Learn</MenuItem>
                          <MenuItem >Forms</MenuItem>
                          <MenuItem >Brochures & Guides</MenuItem>
                          <hr/>
                          <MenuItem ><h2 className="Sidebar-Heading">BLOG</h2></MenuItem>
                          <MenuItem >VIDEOS</MenuItem>
                          <hr/>
                          <MenuItem ><h2 className="Sidebar-Heading">ABOUT US</h2></MenuItem>
                          <hr/>
                          <MenuItem ><h2 className="Sidebar-Heading">RESOURCES</h2></MenuItem>
                          <hr/>
                        </Menu>
                      </SidebarContent>
                    </ProSidebar>
             </div>
    </NavbarWrapper>
    </div>
    
    );
};
