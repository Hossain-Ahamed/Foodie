import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/MainPage/Main";
import LoadingPage from "../../pages/Shared/LoadingPages/LoadingPage/LoadingPage";
import ClockLoading from "../../pages/Shared/LoadingPages/ClockLoading/ClockLoading";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginPages/Login/Login";
import PreventLogIn from "../PreventLogin/PreventLogIn";
import Test from "../../pages/Shared/VideoPlayer/Test";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement : <>error occured</>,
        children :[

            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <PreventLogIn><Login/></PreventLogIn>
            },
            {
                path: '/test',
                element: <Test/>
            },

        ]

    },
   
])
