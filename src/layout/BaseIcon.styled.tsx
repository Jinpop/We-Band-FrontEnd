import styled from 'styled-components';

export const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  width: 64px;
  padding-top: 13px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-top: 3px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.WBOrange.wbo400 : 'transparent'};
`;

export const Content = styled.div<{ $active: boolean }>`
  ${({ theme }) => theme.fontStyles.S02_Bold};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.WBOrange.wbo500 : theme.colors.Gray.gray500};
`;
