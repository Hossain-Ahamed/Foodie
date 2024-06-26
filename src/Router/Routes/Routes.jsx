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

import RestaurantDetailForDev from "../../pages/Admin/RestaurantDetailForDev/RestaurantDetailForDev";
import BranchBillingHistory from "../../pages/Admin/BrnachBillingHistory/BranchBillingHistory";

import Dashboard from "../../pages/Admin/Dashboard/Dashboard";
import PackageSelection from "../../pages/PackageSelection/PackageSelection";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import Payment from "../../pages/MainSite/Payment/Payment";
import SuccessfullPage from "../../pages/MainSite/Payment/SuccessfullPage";
import RestaurentTable from "../../components/RestaurentTable/RestaurentTable";
import AllRestaurant from "../../pages/Admin/AllRestaurant/AllRestaurant";
import AllBranchesForSelectedRest from "../../pages/Admin/AllBranchesForSelectedRest/AllBranchesForSelectedRest";
import SubscriptionPackages from "../../pages/SubscriptionPackages/SubscriptionPackages";
import RestaurantTransactionsHistory from "../../pages/Admin/RestaurantTransactionsHistory/RestaurantTransactionsHistory";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage/>,
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
                path: '/registration-form',
                element: <AddRestaurant />

            },
            {
                path: '/select-package/:branchID',
                element: <PackageSelection />
            },
            {
                path: '/subscription-payment/:branchID',
                element: <Payment />
            },
            {
                path: '/pp',
                element: <SuccessfullPage />
            },

        ]

    },
    {
        path: '/admin',
        element: <PrivateRoute><AdminSite /></PrivateRoute>,
        children: [
            {
                path: '/admin',
                // element : <RoleWiseNavigateToDashboardHome/>
                element: <Dashboard />

            },
            {
                path: 'add-employee',
                element: <AddEmployee />
            },

            {

                path: 'payment-status-list',

                element: <RestaurentTable />
            },
            {
                path: 'all-restaurant',
                element: <AllRestaurant />
            },
            {
                path: 'restaurant/branches/:resID',
                element: <AllBranchesForSelectedRest />
            },
            {
                path: '/admin/view-branch/:branchID',
                element: <BranchBillingHistory />
            },
            {
                path: 'employee-list',
                element: <EmployeeList />
            },
            {
                path: 'subscription',
                element: <SubscriptionPackages />
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
                path: 'employee-list/edit/:employeeID',
                element: <EditEmployee />
            },
            {
                path: 'restaurant-list/edit/:res_id',
                element: <RestaurantDetailForDev />
            },
            {
                path: 'restaurant-transactions',
                element: <RestaurantTransactionsHistory />
            },
            {
                path: 'restaurant-transactions/:branchID',
                element: <></>
            },
        ]
    },


])
