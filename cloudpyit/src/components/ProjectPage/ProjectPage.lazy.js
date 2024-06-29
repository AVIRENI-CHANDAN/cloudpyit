import React, { lazy, Suspense } from 'react';

const LazyProjectPage = lazy(() => import('./ProjectPage'));

const ProjectPage = props => (
  <Suspense fallback={null}>
    <LazyProjectPage {...props} />
  </Suspense>
);

export default ProjectPage;
