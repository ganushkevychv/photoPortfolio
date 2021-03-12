import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useTranslation} from "react-i18next";
import "../translations/i18n"
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

const { t } = useTranslation();

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
             <Link className="link" to="/Gallery">{t("menu.gallery")}</Link>
              </NavItem>
            <NavItem>
            <Link className="link" to="/Contacts">{t("menu.contacts")}</Link>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               {t("menu.social")}
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