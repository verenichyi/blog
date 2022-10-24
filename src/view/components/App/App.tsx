import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import './app.scss';

import routes from 'src/constants/routes';
import Loader from 'src/view/components/Loader';
import { useAppSelector } from 'src/hooks';
import MainLayout from 'src/view/layouts/MainLayout';
import { selectAuth } from 'src/redux/store/selectors';

const SignIn = lazy(() => import('src/view/pages/SignIn'));
const SignUp = lazy(() => import('src/view/pages/SignUp'));
const Blog = lazy(() => import('src/view/pages/Blog'));

const App = () => {
  const navigate = useNavigate();
  const { isAuthorized } = useAppSelector(selectAuth);

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
      return;
    }

    navigate('/sign-in');
  }, [isAuthorized]);

  useEffect(() => {
    if (isAuthorized) {
      navigate('/');
      return;
    }

    navigate('/sign-in');
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.signIn.path} element={<SignIn />} />
        <Route path={routes.signUp.path} element={<SignUp />} />
        <Route path={'/'} element={<MainLayout />}>
          <Route index element={<Blog />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
