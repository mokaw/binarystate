import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Details from "./Details";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Erstellen der Routen 

const router = createBrowserRouter([

  // Route der Startseite --> App.js soll gerendert werden 
  {
    path: "/",
    element: <App />,
  },

  // Route der Details Komponente
  {
    path: "/details",
    element: <Details />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
