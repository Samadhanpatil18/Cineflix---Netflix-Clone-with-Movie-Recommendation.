import React, {lazy, Suspense, useEffect} from 'react'
import Login from './Login'
import {createBrowserRouter, RouterProvider, useNavigate} from 'react-router-dom'
import GolLoader from "./browse/GolLoader.jsx";


const Browse = lazy(() => import('./browse/Browse'))

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Suspense fallback={<GolLoader/>}>
                <Browse/>
            </Suspense>
        },
    ]);

    return (
        <div className="bg-black">
            <RouterProvider router={appRouter}>
                <Login/>
                <Browse/>
            </RouterProvider>
        </div>
    )
}

export default Body
