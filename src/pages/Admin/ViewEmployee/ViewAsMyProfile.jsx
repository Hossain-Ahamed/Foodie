import React from 'react';
import ViewEmployee from './ViewEmployee';

const ViewAsMyProfile = () => {
    const prev = {
        f_name: 'helo',
        l_name: 'dsaj',
        email: 'a@gmail.com',
        gender: 'Female',
        DOB: '2001-01-19',
        nid: '45273485',
        role: 'Accounts',
        mobile: '01868726172',
        commentNotes: "tui moros na k",
        profilePhoto: 'https://lh3.googleusercontent.com/a/ACg8ocKjKSD7xxcI8hEoNgPnsxZ632hSVJFspYJNcAAmPKc39g=s360-c-no',
        streetAddress: "J A M T O L A",
        city: 'Narayanganj',
        stateProvince: 'hello',
        postalCode: '435',
        country: "Bangladesh",


        emergencyAddress: "J A M T O L A",
        emergencyEmail: "hossainahamed6872@gmail.com",
        emergencyName: "Md. Hossain Ahamed",
        emergencyPhoneNumber: "01868726172",
        emergencyRelation: "3241"
    }

    return (
        <>
        <ViewEmployee  data={prev} title="My Profile" editable={false}/>
            
        </>
    );
};

export default ViewAsMyProfile;