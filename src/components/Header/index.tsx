import React from 'react';
import { FaBars } from 'react-icons/fa';

import { 
  Container, 
  Navbar, 
  Logo, 
  NavIcon, 
  NavMenu, 
  NavItem, 
  NavLink,
  NavButton,
  NavButtonLink 
} from './styles';

interface HeaderProps {
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  return (
    <Container>
      <Navbar>
        <Logo to="/">Money</Logo>
        <NavIcon onClick={toggle}>
          <FaBars />
        </NavIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="about">About</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="discover">Discover</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="services">Services</NavLink>            
          </NavItem>
          <NavItem>
            <NavLink to="signup">Sign Up</NavLink>            
          </NavItem>
          <NavButton>
            <NavButtonLink to="/signin">Sign In</NavButtonLink>
          </NavButton>
        </NavMenu>
      </Navbar>
    </Container>
  );
}

export default Header;