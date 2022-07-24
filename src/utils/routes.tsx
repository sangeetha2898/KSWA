import React from 'react';

export const LazyHomeComponent = React.lazy(() => import(/* webpackChunkName: "Home" */'../pages/Home'))
export const LazyPokemonComponent = React.lazy(() => import(/* webpackChunkName: "Pokemon" */'../pages/Pokemon'))

const ROUTES = [
    {
        path: "/home",
        element: <LazyHomeComponent />
    },
    {
        path: "/pokemon",
        element: <LazyPokemonComponent />
    },
    {
        path: '*',
        element: <h1>404 not found</h1>
    }
];

export default ROUTES
