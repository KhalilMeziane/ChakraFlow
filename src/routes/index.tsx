import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/home/page'
import LoginSimple from '@src/pages/auth/LoginSimple'
import LoginSplit from '@src/pages/auth/LoginSplit'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth/login-simple',
        element: <LoginSimple />
    },
    {
        path: '/auth/login-split',
        element: <LoginSplit />
    }
])

export default function Router () {
    return <RouterProvider router={router} />
}