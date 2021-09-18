/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import {COLORS, WEIGHTS} from '../../constants';

import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton/UnstyledButton'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <Icon id="close" strokeWidth={2} />
        </CloseButton>
        <NavList>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </NavList>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  background: ${COLORS.white};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
`;
const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  padding: 22px;
  height: 100%;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  color: ${COLORS.gray[900]};
`;

const NavList = styled.nav`
  margin: auto 0;
  display: flex;
  gap: 22px;
  flex-direction: column;
  text-transform: uppercase;
`;

const NavLink = styled.a`
  color: ${COLORS.gray[900]};
  text-decoration: none !important;
  font-weight: ${WEIGHTS.medium};
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;

const FooterLink = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none !important;
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
