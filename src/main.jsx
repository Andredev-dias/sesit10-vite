import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import { Calc } from './Calc.jsx';
import { Contact } from './Contact.jsx';

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/contact",
    element:  <Contact/>,
  },
  {
    path: "/calc",
    element: <Calc/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
