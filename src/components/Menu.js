import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
import facebook from '../img/icons/facebook.png'
import instagram from '../img/icons/instagram.png'

 

const Menu = () => {

const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);

return(
<div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">@nastkazgdanska</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#">Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Contacts</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Social links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Facebook
                </DropdownItem>
                <DropdownItem>
                  Instagram
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