import React, { lazy, Suspense } from 'react';

const LazyVacancyPage = lazy(() => import('./VacancyPage'));

const VacancyPage = props => (
  <Suspense fallback={null}>
    <LazyVacancyPage {...props} />
  </Suspense>
);

export default VacancyPage;
