import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/home/page'
import LoginSimple from '@src/pages/auth/simple'
import LoginSplit from '@src/pages/auth/split'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/auth/simple',
        element: <LoginSimple />
    },
    {
        path: '/auth/split',
        element: <LoginSplit />
    }
])

export default function Router () {
    return <RouterProvider router={router} />
}