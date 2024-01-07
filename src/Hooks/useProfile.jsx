import React from 'react';
import useAuthProvider from './useAuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';


const useProfile = () => {

    const { user, loading } = useAuthProvider();
    const axiosSecure = useAxiosSecure();
    const { refetch : profileRefetch, data: profile = {}, isLoading: profileLoading, error :profileError} = useQuery({
        queryKey: ['profile', user?.email],
        enabled: (!loading && (!!user)),
        queryFn: async () => {
            const res = await axiosSecure.get(`/get-profile/${user?.email}`);
            // console.log("profile: ",res.data, '\n role : ',{ role : res.data?.role})
            // return res?.data;

            return {
                f_name: 'helo',
                l_name: 'dsaj',
                email: 'a@gmail.com',
                gender: 'Female',
                DOB: '2001-01-19',
                nid: '45273485',
                role: 'Admin',
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

        },
    });
    return { profile, profileLoading, profileRefetch, role: profile?.role, profileError }
   

};

export default useProfile;