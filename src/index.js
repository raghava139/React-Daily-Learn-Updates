import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MainRoute from './Routing/Main';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// const Router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,   
//   },
//   {
//     path: '/Contacts',
//     element: <h1>contacts router</h1>,
//   }
// ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={Router} /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
