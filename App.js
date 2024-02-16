import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantDetail from "./src/components/RestaurantDetail";



const AppLayout = () =>{
    return(
       <>
        <Header/>
        <Outlet />
       </> 
    )
}          

const myData = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantDetail />
            },

        ],
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={myData} />);