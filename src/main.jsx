import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "../component/SignUp.jsx";
import Login from "../component/Login.jsx";
import React from "react";
import Profile from "../component/Profile.jsx";
import MsgBox from "../component/MsgBox.jsx";
import Developer from "../component/Developer.jsx";
import LogOut from "../component/LogOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <SignUp></SignUp>,
      },
      { path: "/login", element: <Login /> },
      { path: "/profile", element: <Profile /> },
      { path: "/inbox", element: <MsgBox /> },
      { path: "/developer", element: <Developer /> },
      { path: "/logout", element: <LogOut /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
);
