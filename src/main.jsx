import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./component/Auth/Login/Login.jsx";
import Tasks from "./component/Tasks/Tasks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path:'/tasks',
        element:<Tasks/>
      }
    ],
  },
  {
    path: "*",
    element: <h1>hola</h1>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
