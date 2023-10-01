import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Courses from "../Pages/Courses";
import Signup from "../Pages/Signup";
import SignIn from "../Pages/SignIn"
import Details from "../Pages/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <Details></Details>,
      },

      
      {
        path: "/Sign_up",
        element: <Signup></Signup>,
      },
      {
        path: "/Sign_in",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);
