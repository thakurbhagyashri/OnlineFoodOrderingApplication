import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import { Error } from "./Components/Error";
import { RestaurantMenu } from "./Components/RestaurantMenu";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
