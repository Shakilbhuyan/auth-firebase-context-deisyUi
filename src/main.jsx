import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProviders from './Provider/authProviders';
import Orders from './Components/Orders';
import PrivateRoutes from './routes/PrivateRoutes';
import UserProfile from './Components/userProfile/UserProfile';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout></Layout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
      path:'/profile',
      element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
      },
      {
        path:'/orders',
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={router} />
   </AuthProviders>
  </React.StrictMode>,
)
