import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import HomeMain from './Components/Home/HomeMain/HomeMain.jsx';
import Mobile from './Components/Products/Mobile/Mobile';
import SmartWatch from './Components/Products/SmartWatch/SmartWatch';
import Laptop from './Components/Products/Laptop/Laptop';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    children: [
      {
        path: '/',
        element: <HomeMain />
      },
      {
        path: 'mobile',
        element: <Mobile />
      },
      {
        path: 'smartWatch',
        element: <SmartWatch />
      },
      {
        path: 'laptop',
        element: <Laptop />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(     
  <React.StrictMode>     
      <RouterProvider router={router} />   
  </React.StrictMode> ); 
