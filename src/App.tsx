import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, useRoutes } from 'react-router-dom'
import MyErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ROUTES from './utils/routes';
import './style.css'

const APP_TITLE = 'Webapp boilerplate'
const APP_DESC = 'boilerplate for webapp using rxjs, redux and typescript'

const App = () => {
 return (
    <MyErrorBoundary>
    <HelmetProvider>
        <Helmet defaultTitle={APP_TITLE}>
            <meta name={'description'} content={APP_DESC} />
        </Helmet>
            <Suspense fallback={<> </>}>
                {useRoutes(ROUTES)}
            </Suspense>
    </HelmetProvider>
    </MyErrorBoundary>
 )
}
export default App;