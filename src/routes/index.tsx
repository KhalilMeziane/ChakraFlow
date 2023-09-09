import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/home/page'
import AuthSimple from '@pages/auth/simple'
import AuthCover from '@src/pages/auth/cover'
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
        path: '/auth/cover',
        element: <AuthCover />
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