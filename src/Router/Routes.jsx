import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import HomePage from "../pages/homePage/HomePage";
import Apps from "../pages/apps/Apps";
import InstalledApps from "../pages/installedApps/InstalledApps";
import ErrorPage from "../pages/errorPage/ErrorPage";
import AppDetails from "../pages/appDetails/AppDetails";
import DashBoard from "../pages/graphDashBoard/DashBoard";

export const router = createBrowserRouter(
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
            path: 'apps/:id',  //dynamic route, jekhane :id holo dynamic part, jekono kisu hote pare
            element: <AppDetails></AppDetails>
        },
        {
          path: '/installedApps',
          element: <InstalledApps></InstalledApps>
        },
        {
          path: '/dashBoard',
          element: <DashBoard></DashBoard>
        }
      ],
      errorElement: <ErrorPage></ErrorPage>
    }
  ]
)