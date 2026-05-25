import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'

import { router } from './Router/Routes'
import InstalledAppsProvider from './context/InstalledAppsProvider'


// Routes file theke path gula import kore nibo, jekhane sob route define kora ache

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* use of context API */}
    <InstalledAppsProvider>
      <RouterProvider router={router} />
    </InstalledAppsProvider>
  </StrictMode>,
)
