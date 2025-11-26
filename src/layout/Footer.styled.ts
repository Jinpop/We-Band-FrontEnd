import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  height: 120px;
  padding: 28px 36px;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 400px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.Gray.gray200};

  position: fixed;
  bottom: 0px;
`;

export const FooterLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 4px;
`;

export const FooterLink = styled.a`
  ${({ theme }) => theme.fontStyles.S01_Medium};
  color: ${({ theme }) => theme.colors.Gray.gray500};
`;
