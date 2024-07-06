import React, { lazy, Suspense } from 'react';

const LazyAuthRegister = lazy(() => import('./AuthRegister'));

const AuthRegister = props => (
  <Suspense fallback={null}>
    <LazyAuthRegister {...props} />
  </Suspense>
);

export default AuthRegister;
