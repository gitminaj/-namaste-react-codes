import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantDetail from "./src/components/RestaurantDetail";
import appStore from "./src/utils/appStore";
import { Provider} from "react-redux";
import UserContext from "./src/utils/UserContext";

// Lazy loading

const Grocery = lazy(()=> import("./src/components/Grocery"))
const About = lazy( ()=> import("./src/components/About"))


const AppLayout = () =>{
    return(
        <>
          <Provider store={appStore}>
            <UserContext.Provider value={{name: "user"}}>
                <Header/>
            </UserContext.Provider>
                <Outlet />
          </Provider>
  
  
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
                element: (<Suspense fallback={<h1> About is about to come.. </h1>}> <About /> </Suspense>)
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: (<Suspense fallback = {<h1>loading....</h1>}> <Grocery /> </Suspense>)
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