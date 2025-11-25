import { Outlet } from 'react-router';
import * as S from './Layout.styled';

const LiteLayout = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <S.LiteLayoutContainer>
      <S.LogoContainer>
        <S.Logo onClick={handleClick} />
      </S.LogoContainer>
      <Outlet />
    </S.LiteLayoutContainer>
  );
};

export default LiteLayout;
