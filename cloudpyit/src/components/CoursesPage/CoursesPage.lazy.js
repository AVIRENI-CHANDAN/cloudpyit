import React, { lazy, Suspense } from 'react';

const LazyCoursesPage = lazy(() => import('./CoursesPage'));

const CoursesPage = props => (
  <Suspense fallback={null}>
    <LazyCoursesPage {...props} />
  </Suspense>
);

export default CoursesPage;
