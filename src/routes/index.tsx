import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/home/page'
import { AuthBold, AuthColumn, AuthCover, AuthImage, AuthPlain, AuthSidebar, AuthSimple } from '@pages/auth'

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
    },
    {
        path: '/auth/column',
        element: <AuthColumn />
    },
    {
        path: '/auth/sidebar',
        element: <AuthSidebar />
    }
])

export default function Router () {
    return <RouterProvider router={router} />
}