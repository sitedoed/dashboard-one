import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Project from './pages/Project';
import Charts from './pages/Charts';
import Docs from './pages/Docs';
import Login from './pages/Login';
import Register from './pages/Register';
import Posts from './pages/Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contato",
    element: <Contact/>
  },
  {
    path: "/projeto",
    element: <Project />
  },
  {
    path: "/graficos",
    element: <Charts />
  },
  {
    path: "/documentacao",
    element: <Docs />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastrar",
    element: <Register />
  },
  {
    path: "/posts",
    element: <Posts />
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);


