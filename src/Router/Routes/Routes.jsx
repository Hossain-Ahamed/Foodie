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
import EmployeeList from "../../pages/Admin/EmployeeList/EmployeeList";

import ViewEmployee from "../../pages/Admin/ViewEmployee/ViewEmployee";

import EditEmployee from "../../pages/Admin/EditEmployee/EditEmployee";
import FormPolicy from "../../pages/MainSite/FormPolicy/FormPolicy";
import AdminSite from "../../Layouts/AdminSite/AdminSite";
import ViewAsAdmin from "../../pages/Admin/ViewEmployee/ViewAsAdmin";
import ViewAsMyProfile from "../../pages/Admin/ViewEmployee/ViewAsMyProfile";
import RoleWiseNavigateToDashboardHome from "../RoleWiseNavigate/RoleWiseNavigate";
import ProtectedByRole from "../ProtectedByRole/ProtectedByRole";



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
                path: '/privacy-policy',
                element: <PrivacyPolicy />
            },
            
            {
                path: '/pricing',
                element: <PricingPage />
            },
            {
                path : '/registration-form',
                element : <AddRestaurant/>

            }

        ]

    },
    {
        path: '/admin',
        element :<AdminSite/>,
        children : [
            {
                path : '/admin',
                element : <RoleWiseNavigateToDashboardHome/>

            },
            {
                path: 'add-employee',
                element: <AddEmployee />
            },
            {
                path: 'employee-list',
                element: <EmployeeList />
            },
            {

                path: 'employee-list/view/:employeeID',
                element: <ViewAsAdmin />
            },
            {
                path: 'my-profile',
                element: <ViewAsMyProfile />
            },
            {
                path : 'employee-list/edit/:employeeID',
                element : <EditEmployee/>
            },
        ]
    }
    

])
