import React from "react";

import Slider from "react-slick";

//Component
import Poster from "../Poster/poster.component";

//config folder
import settings from "../../config/PosterCarousal.config";
//Images
import PremierImages from "../../config/TempPoster.config";

export const Premier = () => {
    /*This code snippet shifted to path "../../config/PosterCarousal.config"
    const settings = {
        Infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0
    };
    */

    /*This code snippet shifted to the path "../../config/TempPoster.config"
    const PremierImages = [
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC4xLzEwICAzNS4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00384234-namrszxlsp-portrait.jpg",
            alt: "SHAITAAN",
            title: "SHAITAAN",
            subtitle: "Supernatural/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS40LzEwICAxMTguMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386670-cfukbtjhrg-portrait.jpg",
            alt: "MANJUMMEL BOYS",
            title: "MANJUMMEL BOYS",
            subtitle: "Adventure/Drama/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC45LzEwICAyNC44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00361874-slzmumrbzy-portrait.jpg",
            alt: "BHIMAA",
            title: "BHIMAA",
            subtitle: "Adventure/Drama"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC40LzEwICA4MDcgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00389138-kqmapfefeg-portrait.jpg",
            alt: "Karataka Dhamanaka",
            title: "Karataka Dhamanaka",
            subtitle: "Action/Comedy/Drama"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny45LzEwICAyOC43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386605-uqlxfhnnrt-portrait.jpg",
            alt: "Gaami",
            title: "Gaami",
            subtitle: "Adventure/Fantasy/Thriller"
        },
        {
            src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICAyMi43SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00331567-fvsqbkjgxs-portrait.jpg",
            alt: "Dune: Part Two",
            title: "Dune: Part Two",
            subtitle: "Actio/Adventure/Drama/Fantasy"
        },
    ]*/

    return (
        <>
            <div className="flex flex-col items-start py-4 ">
                <h3 className="text-white text-xl font-bold">Premiers</h3>
                <p className="text-white text-sm">Brand new release every Friday</p>
            </div>
            <Slider {...settings}>
                {PremierImages.map((image) => (
                    <Poster {...image} isDark />
                ))}

            </Slider>
        </>
    )

}