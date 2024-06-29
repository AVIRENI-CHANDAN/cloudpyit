import React, { lazy, Suspense } from 'react';

const LazyContactPage = lazy(() => import('./ContactPage'));

const ContactPage = props => (
  <Suspense fallback={null}>
    <LazyContactPage {...props} />
  </Suspense>
);

export default ContactPage;
