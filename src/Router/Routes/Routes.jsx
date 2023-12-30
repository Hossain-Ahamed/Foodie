import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/MainPage/Main";
import LoadingPage from "../../pages/Shared/LoadingPages/LoadingPage/LoadingPage";
import ClockLoading from "../../pages/Shared/LoadingPages/ClockLoading/ClockLoading";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>

    },
    {
        path: '/j',
        element: <ClockLoading/>
    }
])
