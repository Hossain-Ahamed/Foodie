import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/MainPage/Main";
import LoadingPage from "../../pages/Shared/LoadingPages/LoadingPage/LoadingPage";
import ClockLoading from "../../pages/Shared/LoadingPages/ClockLoading/ClockLoading";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginPages/Login/Login";
import PreventLogIn from "../PreventLogin/PreventLogIn";
import Test from "../../pages/Shared/VideoPlayer/Test";
import ErrorPage from "../../pages/Shared/ErrorPage/ErrorPage";
import PrivacyPolicy from "../../pages/Others/PrivacyPolicy/PrivacyPolicy";

import PricingPage from "../../pages/PricingPage/PricingPage";

import AddEmployee from "../../pages/Admin/AddEmployee/AddEmployee";
import AddRestaurant from "../../pages/MainSite/AddRestaurant/AddRestaurant";
import Table from "../../components/Table/Table";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <>error occured</>,
        children: [

            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <PreventLogIn><Login /></PreventLogIn>
            },
            {
                path: '/test',
                element: <Test />
            },
            {
                path: '/error',
                element: <ErrorPage />
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy />
            },
            {
                path: '/add-employee',
                element: <AddEmployee />
            }
            ,
            {
                path: '/add-Restaurant',
                element: <AddRestaurant />
            },
            {
                path: '/pricing',
                element: <PricingPage />
            }

        ]

    },
    {
        path: 'table',
        element: <Table />
    }

])
