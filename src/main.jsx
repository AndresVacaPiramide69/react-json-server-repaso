import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { UserProvider } from "./context/UserContext"; // Nombre correcto
import NavBar from "./component/Logged/NavBar/NavBar.jsx";
import Logged from "./component/Logged/Logged.jsx";
import ErrorPage from "./component/Errors/Error404.jsx";
import Inicio from "./component/Inicio/Inicio.jsx";
// import { ProtectedRoute } from "./component/ProtectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/inicio",
        element: <Inicio/>,
      },
    ],
  },
  // {
  //   path: "/:email",
  //   element: <Logged />,
  //   children: [],
  // },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>
);
