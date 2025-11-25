import styled from 'styled-components';
import logo from '@assets/logo.svg';

export const LiteLayoutContainer = styled.div``;

export const Logo = styled.img.attrs({
  src: logo,
})`
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`;
