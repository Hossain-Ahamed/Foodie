import React from 'react';
import useProfile from '../../Hooks/useProfile';
import useAuthProvider from '../../Hooks/useAuthProvider';

const RoleWiseNavigateToDashboardHome = () => {
    const { role } = useProfile();
    const { provideSignOut } = useAuthProvider();
    if (role === "Admin") {
        return <>admin</>
    } else if (role === "Accounts") {
        return <>account</>
    } else if (role === "Developer") {
        return<>dev</>
    } else {
        return provideSignOut();
    }

};

export default RoleWiseNavigateToDashboardHome;