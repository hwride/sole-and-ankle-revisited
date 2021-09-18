import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon'
import UnstyledButton from '../UnstyledButton/UnstyledButton'

const iconStrokeWidth = 2;
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LeftSide>
          <Logo />
        </LeftSide>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections Collections Collections</NavLink>
          <IconButton><Icon id="shopping-bag" strokeWidth={iconStrokeWidth} /></IconButton>
          <IconButton><Icon id="search" strokeWidth={iconStrokeWidth} /></IconButton>
          <IconButton onClick={() => setShowMobileMenu(true)}><Icon id="menu" strokeWidth={iconStrokeWidth} /></IconButton>
        </Nav>
        <RightSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;  
  
  @media ${QUERIES.tabletAndDown} {
    border-top: 3px solid ${COLORS.gray[900]};
    align-items: center;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    14vw - 10rem,
    5rem
  );
  margin: 0px 48px;
  
  @media ${QUERIES.tabletAndDown} {
    margin-right: 0;  
    gap: 28px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
`;
const RightSide = styled.div`
  flex: 1;  
  
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  white-space: nowrap;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
   
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const IconButton = styled(UnstyledButton)`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: revert;
  }
`;

export default Header;
