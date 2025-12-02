import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@layout/Layout';
import Home from '@pages/Home';
import * as S from './App.styled';
import OnBoarding from '@pages/Onboarding';
import ProtectedRoute from '@components/ProtectedRoute';
import Auth from '@pages/Auth';

function App() {
  return (
    <BrowserRouter>
      <S.AppContainer>
        <Routes>
          <Route path="onboarding" element={<OnBoarding />} />
          <Route path="auth-callback" element={<Auth />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </S.AppContainer>
    </BrowserRouter>
  );
}

export default App;
