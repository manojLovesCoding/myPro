import React, { useState, useEffect } from "react";

import HeroSlider from "react-slick";
import axios from "axios";
//Component
import { NextArrow, PrevArrow } from "./Arrows.component";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousal = () => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestNowPlayingMovies = async () => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestNowPlayingMovies();
    }, []);

    const settingsLg = {
        arrows: true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "300px",
        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />

    }

    const settings = {
        arrows: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    /*This snippet replaced with the above useEffect and useState methods
    const images = [
        "https://wallpapers.com/images/hd/harry-potter-all-characters-lvbwsigjt3yykg3n.jpg",
        "https://getwallpapers.com/wallpaper/full/b/4/a/1267876-download-movie-poster-wallpaper-1920x1080.jpg",
        "https://wallpapercave.com/wp/wp9875927.jpg",
        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c0a86db-d334-4bff-b302-5a1a26f708a3/de02cix-75af1a8a-2e84-45b2-8fbe-92bb88730dc0.png/v1/fill/w_1192,h_670,q_70,strp/johnny_english_4___reloaded_poster_by_kevindaghost_de02cix-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvNGMwYTg2ZGItZDMzNC00YmZmLWIzMDItNWExYTI2ZjcwOGEzXC9kZTAyY2l4LTc1YWYxYThhLTJlODQtNDViMi04ZmJlLTkyYmI4ODczMGRjMC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hRDdF7v7JbPLXK0HUOjZBkL7wAvHh2q6DNG2WTreHpU",
        "https://m.media-amazon.com/images/S/pv-target-images/5b3fc9d151d031314502696b86e969ea5af07d8fef69af421c14a0ace39ea5da.jpg"
    ]*/

    return (
        <>
            <div className="lg:hidden">
                <HeroSlider {...settings}>
                    {
                        images.map((image) => (
                            <div className="w-full h-64 md:h-80 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>

            <div className="hidden lg:block">
                <HeroSlider {...settingsLg}>
                    {
                        images.map((image) => (
                            <div className="w-full h-96 px-2 py-3">
                                <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
                            </div>
                        ))
                    }
                </HeroSlider>
            </div>





        </>
    );
};

export default HeroCarousal;
