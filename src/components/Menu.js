import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
import {Link} from 'react-router-dom'

 

const Menu = () => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return(
<div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">@nastkazgdanska</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
             <Link to="/Gallery">Gallery</Link>
              </NavItem>
            <NavItem>
            <Link to="/Contacts">Contacts</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Social links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 
                <a href="https://www.facebook.com/AnastasiiaGanushkevych/">Facebook</a>
                
                </DropdownItem>
                <DropdownItem>
                <a href="https://www.instagram.com/nastkazgdanska/">Instagram</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
)
}
export default Menu;