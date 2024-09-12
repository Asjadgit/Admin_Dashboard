import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/forms/Login';
import Dashboard from './components/Dashboard';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/ErrorPage';
import AppLayout from './components/layouts/AppLayout';
import AddProduct from './components/pages/AddProduct';
import AllProducts from './components/pages/AllProduct';
import AllOrders from './components/pages/AllOrders';
import PendingOrders from './components/pages/PendingOrders';
import Delivered from './components/pages/Delivered';
import Customers from './components/pages/Customers';

export const Welcome = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Save to local storage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Remove from local storage
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <AppLayout onLogout={handleLogout} /> : <Login onLogin={handleLogin} />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: isAuthenticated ? <Home /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/about",
          element: isAuthenticated ? <About /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/contact",
          element: isAuthenticated ? <Contact /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/new-product",
          element: isAuthenticated ? <AddProduct /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/all-products",
          element: isAuthenticated ? <AllProducts /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/all-orders",
          element: isAuthenticated ? <AllOrders /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/pending-orders",
          element: isAuthenticated ? <PendingOrders /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/delivered-orders",
          element: isAuthenticated ? <Delivered /> : <Login onLogin={handleLogin} />,
        },
        {
          path: "/customers",
          element: isAuthenticated ? <Customers /> : <Login onLogin={handleLogin} />,
        },
      ],
    },
    {
      path: '/login',
      element: isAuthenticated ? <Dashboard /> : <Login onLogin={handleLogin} />,
    },
  ]);

  return <RouterProvider router={router} />;
};
