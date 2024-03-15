import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { SharedLayoutContainerStyled, SharedLayoutMainStyled } from './styled';
import { AppBar } from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <SharedLayoutContainerStyled>
      <AppBar />
      <SharedLayoutMainStyled>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SharedLayoutMainStyled>
    </SharedLayoutContainerStyled>
  );
};

export default SharedLayout;
