import React from "react";
import { FaStar } from "react-icons/fa";

const MovieHero = () => {
    return (
        <>
            <div className="md:hidden"  >
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shaitaan-et00384234-1706179766.jpg" alt="poster" />
            </div>
            <div className="hidden md:block lg:hidden">
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shaitaan-et00384234-1706179766.jpg" alt="poster" />
            </div>
            <div className="relative hidden lg:block" style={{ height: "30rem" }}>
                <div className="absolute h-full w-full z-10"
                    style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" }} />
                <div className="absolute z-30 w-64 h-96 left-24 top-10">
                    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/shaitaan-et00384234-1706179766.jpg" alt="poster" className=" h-full w-full" />

                </div>
                <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shaitaan-et00384234-1706179766.jpg" className="w-full h-full" alt="poster" />

                <h1 className="absolute z-40 top-20 left-96 text-white text-3xl font-bold">Shaitaan</h1>
                <FaStar className="absolute z-40 top-32 left-96 h-10 w-10" />
            </div>




        </>
    );
};

export default MovieHero;