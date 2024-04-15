import React, { useEffect, useState } from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SetTitle from "../../Shared/SetTtitle/SetTitle";
import LoadingPage from "../../Shared/LoadingPages/LoadingPage/LoadingPage";
import ErrorPage from "../../Shared/ErrorPage/ErrorPage";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";

export default function AllRestaurant() {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: data = [], isLoading, error } = useQuery({
        queryKey: ['all-restaurant-dev'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-restaurant-dev`);
            return res.data;
        }
    });

    const [imageColors, setImageColors] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const getColorFromImage = async (src) => {
    //         const img = new Image();
    //         img.src = src;
    //         img.crossOrigin = "Anonymous"; // Allow cross-origin requests for images
    //         img.onload = () => {
    //             const canvas = document.createElement("canvas");
    //             canvas.width = img.width;
    //             canvas.height = img.height;
    //             const ctx = canvas.getContext("2d");
    //             ctx.drawImage(img, 0, 0);
    //             const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

    //             let r = 0, g = 0, b = 0;
    //             for (let i = 0; i < imageData.length; i += 4) {
    //                 r += imageData[i];
    //                 g += imageData[i + 1];
    //                 b += imageData[i + 2];
    //             }
    //             const totalPixels = imageData.length / 4;
    //             const avgColor = `rgb(${Math.round(r / totalPixels)}, ${Math.round(g / totalPixels)}, ${Math.round(b / totalPixels)})`;
    //             setImageColors(prevColors => [...prevColors, avgColor]);
    //         };
    //     };

    //     if (data && Array.isArray(data)) {
    //         data.forEach(item => {
    //             getColorFromImage(item.img);
    //         });
    //     }
    // }, [data]);

    if (isLoading) {
        return <LoadingPage />;
    }
    if (error) {
        return <ErrorPage />;
    }
    return (
        <section>
            <SectionTitle h1="All Restaurant" />
            <SetTitle title="All Restaurant" />
            <div className="flex flex-wrap justify-center gap-5">
                {data && Array.isArray(data) && data.map((item, index) => (
                    <Card
                        key={index}
                        isFooterBlurred
                        radius="lg"
                        className="border-none w-full max-w-sm h-64 mt-5 relative"
                        style={{ backgroundColor: imageColors[index] }}
                    >
                        <img  src={item.img} alt="" className="w-full h-full object-cover"/>
                    
                        <CardFooter className="justify-between bg-black/50 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                            <p className="text-white">{item.res_name}</p>
                            <Button onPress={()=>navigate(`/admin/restaurant/branches/${item._id}`)} className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                                Visit
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
}
