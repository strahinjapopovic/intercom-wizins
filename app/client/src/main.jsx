import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//-------------------------------------------------------------------------//
import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Download from './pages/Download.jsx';
import AccountDetails from './pages/Details.jsx';
import SignupError from './pages/SignupError.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import RouteErrorPage from './pages/RouteErrorPage.jsx';
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
        path: '/profile',
        element: <Profile />
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
        path: '/reset-password',
        element: <ResetPassword />
      },
    ]
  },
]);
//-------------------------------------------------------------------------//
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
