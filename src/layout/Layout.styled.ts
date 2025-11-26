import styled from 'styled-components';
import logo from '@assets/logo.svg';

export const LayoutContainer = styled.div`
  width: 400px;
`;

export const Page = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.BlackAndWhite.white};
`;

export const Logo = styled.img.attrs({
  src: logo,
})`
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 32px;
`;
