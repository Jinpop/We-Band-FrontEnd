import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@layout/Layout';
import Home from '@pages/Home';
import * as S from './App.styled';
import OnBoarding from '@pages/Onboarding';

function App() {
  return (
    <BrowserRouter>
      <S.AppContainer>
        <Routes>
          <Route index element={<OnBoarding />} />

          {/* <Route element={<Layout />}>
            <Route index element={<Home />} />
          </Route> */}
        </Routes>
      </S.AppContainer>
    </BrowserRouter>
  );
}

export default App;
