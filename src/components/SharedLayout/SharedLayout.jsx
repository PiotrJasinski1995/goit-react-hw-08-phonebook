import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';
import { SharedLayoutMainStyled } from './styled';
import { AppBar } from 'components/AppBar/AppBar';

const SharedLayout = () => {
  return (
    <div>
      <AppBar />
      <SharedLayoutMainStyled>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </SharedLayoutMainStyled>
    </div>
  );
};

export default SharedLayout;
