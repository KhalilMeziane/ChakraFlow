import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/home/page'
import AuthSimple from '@pages/auth/simple'
import AuthSplit from '@pages/auth/split'
import AuthBold from '@pages/auth/bold'
import AuthPlain from '@pages/auth/plain'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth/simple',
        element: <AuthSimple />
    },
    {
        path: '/auth/split',
        element: <AuthSplit />
    },
    {
        path: '/auth/bold',
        element: <AuthBold />
    },
    {
        path: '/auth/plain',
        element: <AuthPlain />
    }
])

export default function Router () {
    return <RouterProvider router={router} />
}