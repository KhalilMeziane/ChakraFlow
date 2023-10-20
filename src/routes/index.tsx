import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from '@pages/home/page'
import { AuthBold, AuthColumn, AuthCover, AuthImage, AuthPlain, AuthSidebar, AuthSimple } from '@pages/auth'
import { FullWidthDoubleStack, ContainerDoubleStack, ToggleAsideBar, NavSidebar } from '@pages/layouts'

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
    },
    {
        path: '/layouts/full-width-double-stack',
        element: <FullWidthDoubleStack />
    },
    {
        path: '/layouts/container-double-stack',
        element: <ContainerDoubleStack />
    },
    {
        path: '/layouts/toggle-sidebar',
        element: <ToggleAsideBar />
    },
    {
        path: '/layouts/nav-toggle-sidebar',
        element: <NavSidebar />
    }
])

export default function Router () {
    return <RouterProvider router={router} />
}