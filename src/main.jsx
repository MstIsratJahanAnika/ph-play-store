import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Apps from './pages/apps/Apps'
import InstalledApps from './pages/installedApps/InstalledApps'
import ErrorPage from './pages/errorPage/ErrorPage'
import HomePage from './pages/homePage/HomePage'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: '/', //index: true, same as path: '/'
          element: <HomePage></HomePage>,
          // loader: ()=> fetch('data.json')
        },
        {
          path: '/apps',
          element: <Apps></Apps>
        },
        {
          path: '/installedApps',
          element: <InstalledApps></InstalledApps>
        }
      ],
      errorElement: <ErrorPage></ErrorPage>
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
