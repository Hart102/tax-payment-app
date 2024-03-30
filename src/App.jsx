import { createBrowserRouter } from "react-router-dom";
import Layouut from "@/layout";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
  {
    element: <Layouut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
