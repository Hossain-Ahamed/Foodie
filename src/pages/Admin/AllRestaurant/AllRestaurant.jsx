import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SetTitle from "../../Shared/SetTtitle/SetTitle";
import LoadingPage from "../../Shared/LoadingPages/LoadingPage/LoadingPage";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function AllRestaurant() {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: data = [], isLoading, error } = useQuery({
        queryKey: ['all-restaurant-dev'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-restaurant-dev`);
            return res.data;
        }
    })

    if (isLoading) {
        return <LoadingPage />
    }
    if (error) {
        return <ErrorPage />
    }
    return (
        <section>
            <SectionTitle h1="All Restaurant" />
            <SetTitle title="All Restaurant" />
            <div className="flex flex-wrap justify-center gap-5">
                {
                    data && Array.isArray(data) && data.map((item, _idx) => <Card key={_idx}
                        isFooterBlurred
                        radius="lg"
                        className="border-none w-full max-w-sm h-72 mt-5"
                    >
                        <Image
                            alt="Restaurant Card"
                            className="object-cover w-full h-full"
                            src={item?.img}
                        />
                        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className=" text-white">{item?.res_name}</p>
                            <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                <Link to={`/admin/restaurant/branches/${item._id}`}>Visit</Link>
                            </Button>
                        </CardFooter>
                    </Card>)
                }
            </div>
        </section>
    );
}
