import React, { Suspense, lazy } from 'react'

const DetailsForApi = lazy(() => import('./Lazy2.js'))
const LazyLoading = () => {
    return (
        <>
            <h1> LazyLoading </h1>
            <Suspense fallback={<div>loading...</div>}>
                <DetailsForApi />
            </Suspense>
        </>
    )
}
export default LazyLoading;