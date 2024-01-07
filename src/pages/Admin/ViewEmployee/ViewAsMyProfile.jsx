import React from 'react';
import ViewEmployee from './ViewEmployee';
import useProfile from '../../../Hooks/useProfile';

const ViewAsMyProfile = () => {
    const { profile } = useProfile();
    return (
        <>
            <ViewEmployee data={profile} title="My Profile" editable={false} />
        </>
    );
};

export default ViewAsMyProfile;