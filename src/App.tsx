import React, { Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Link, useRoutes } from 'react-router-dom'
import MyErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import ROUTES from './utils/routes';
import './style.css'
import './slick/slick.css'
import './slick/slick-theme.css'

const APP_TITLE = 'Karnataka Wheelchair Cricket Association'
const APP_DESC = 'KSCA - One stop for wheelchair cricket association.'

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