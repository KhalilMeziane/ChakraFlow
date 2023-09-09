import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/home/page'
import AuthSimple from '@pages/auth/simple'
import AuthSplit from '@pages/auth/split'
import AuthBold from '@pages/auth/bold'
import AuthPlain from '@pages/auth/plain'
import AuthImage from '@pages/auth/image'

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
    },
    {
        path: '/auth/image',
        element: <AuthImage />
    }
])

export default function Router () {
    return <RouterProvider router={router} />
}