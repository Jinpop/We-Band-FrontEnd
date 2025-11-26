import { Outlet } from 'react-router';
import * as S from './Layout.styled';
import NavBar from './NavBar';

const LiteLayout = () => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <S.LayoutContainer>
      <S.LogoContainer>
        <S.Logo onClick={handleClick} />
      </S.LogoContainer>
      <Outlet />
      <NavBar />
    </S.LayoutContainer>
  );
};

export default LiteLayout;
