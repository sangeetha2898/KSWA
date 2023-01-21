import React from 'react';

export const LazyHomeComponent = React.lazy(() => import(/* webpackChunkName: "HomePage" */'../pages/Home'))

const ROUTES = [
    {
        path: "/",
        element: <LazyHomeComponent />
    },
    {
        path: '*',
        element: <h1>404 not found</h1>
    }
];

export default ROUTES
