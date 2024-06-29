import React, { lazy, Suspense } from 'react';

const LazyCourseSection = lazy(() => import('./CourseSection'));

const CourseSection = props => (
  <Suspense fallback={null}>
    <LazyCourseSection {...props} />
  </Suspense>
);

export default CourseSection;
