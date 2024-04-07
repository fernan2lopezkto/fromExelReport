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
import ResponsiveAppBar from "./components/Apbar.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    error: <PageError />,
  },
  {
    path: "/app",
    element: <PageApp />,
    error: <PageError />,
  },
  {
    path: "/ajustes",
    element: <PageAjustes />,
    error: <PageError />,
  },
  {
    path: "/ayuda",
    element: <PageAyuda />,
    error: <PageError />,
  },
  {
    path: "/*",
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
        < ResponsiveAppBar />
        <RouterProvider router={router} />
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
