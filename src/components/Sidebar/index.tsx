import React from 'react';

import { 
  Container, 
  Icon, 
  CloseIcon,
  SidebarWrapper,
  SidebarMenu, 
  SidebarLink, 
  SidebarButtonWrapper,
  SidebarButtonLink  
} from './styles';

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>            
          <SidebarLink to="discover">Discover</SidebarLink> 
          <SidebarLink to="services">Services</SidebarLink>
          <SidebarLink to="signup">Sign Up</SidebarLink>          
        </SidebarMenu>
        <SidebarButtonWrapper>
          <SidebarButtonLink to="/signin">Sign In</SidebarButtonLink>
        </SidebarButtonWrapper>
      </SidebarWrapper>
    </Container>
  );
}

export default Sidebar;