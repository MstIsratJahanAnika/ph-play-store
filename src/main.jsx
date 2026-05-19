import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import RootLayout from './layout/RootLayout'
import Apps from './pages/apps/Apps'
import InstalledApps from './pages/installedApps/InstalledApps'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout></RootLayout>,
      children: [
        {
          path: '/', //index: true, same as path: '/'
          element: <h2>Home</h2>
        },
        {
          path: '/apps',
          element: <Apps></Apps>
        },
        {
          path: '/installedApps',
          element: <InstalledApps></InstalledApps>
        }
      ]
    }
  ]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 className='bg-red-200'>Hello</h2>

    <RouterProvider router={router} />
  </StrictMode>,
)
