import React from "react";
import MovieHero from "../components/MovieHero/MovieHero.component";
/*
<div><img src="https://getwallpapers.com/wallpaper/full/b/4/a/1267876-download-movie-poster-wallpaper-1920x1080.jpg" alt="" />
/div>*/

const Movie = () => {
    return (
        <>
            <MovieHero />
            <div className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-20">
                <div className="flex flex-col items-start gap-3">
                    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
                    <p>Kabir and his family`s fun weekend retreat takes a nightmarish turn when they let a friendly but mysterious stranger into their house. As the clock ticks, the family will be forced to confront their worst fears in this gripping, edge-of-the-seat supernatural-thriller that deals with the sinister elements of Indian Black Magic.</p>
                </div>
                <div className="my-8">
                    <hr />
                </div>

            </div>
        </>
    );
};

export default Movie;