import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//-------------------------------------------------------------------------//
import App from './App.jsx';
import Home from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Dashboard from './pages/Profile.tsx';
import Download from './pages/Download.tsx';
import AccountDetails from './pages/Details.tsx';
import SignupError from './pages/SignupError.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
import DisplayUserOnline from './pages/UserOnline.tsx';
import ForgotPassword from './pages/ForgotPassword.tsx';
import RouteErrorPage from './pages/RouteErrorPage.tsx';
import ForgotPasswordClone from './pages/ForgotPasswordClone.tsx';
//-------------------------------------------------------------------------//
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/signup-error',
        element: <SignupError />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/account-details',
        element: <AccountDetails />
      },
      {
        path: '/download',
        element: <Download />
      },
      {
        path: '/forgot-password',
        element: <ForgotPassword />
      },
      {
        path: '/change-password',
        element: <ForgotPasswordClone />
      },
      {
        path: '/reset-password',
        element: <ResetPassword />
      },
      {
        path: '/user-online',
        element: <DisplayUserOnline />
      },
    ]
  },
]);
const AppRouter = () => {
  return <RouterProvider router={router} />;
}
//-------------------------------------------------------------------------//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
