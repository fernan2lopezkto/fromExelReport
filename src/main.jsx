import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import HomePage from "./pages/PageHome.jsx";
import PageAyuda from "./pages/PageAyuda.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PageError from "./pages/PageError.jsx";
import PageAjustes from "./pages/PageAjustes.jsx";
import PageApp from "./pages/PageApp.jsx";




const router = createBrowserRouter([
  {
    path: "/fromExelReport",
    element: <HomePage />,
    error: <PageError />,
  },
  {
    path: "/fromExelReport/app",
    element: <PageApp />,
    error: <PageError />,
  },
  {
    path: "/fromExelReport/ajustes",
    element: <PageAjustes />,
    error: <PageError />,
  },
  {
    path: "/fromExelReport/ayuda",
    element: <PageAyuda />,
    error: <PageError />,
  },
  {
    path: "/fromExelReport/*",
    element: <PageNotFound />,
    error: <PageError />,
  },
]);

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
