import React from "react";
import { BiMoviePlay } from "react-icons/bi";
import MovieHero from "../components/MovieHero/MovieHero.component";
/*
<div><img src="https://getwallpapers.com/wallpaper/full/b/4/a/1267876-download-movie-poster-wallpaper-1920x1080.jpg" alt="" />
/div>*/

const launchRazorPay = () => {
    let options = {
        key: "rzp_test_bb1BkMaCgNvA32",
        amount: 500 * 100,
        currency: "INR",
        name: "Book My Show Clone",
        description: "Movie Purchase on Rental",
        image: "https://p7.hiclipart.com/preview/919/445/291/bookmyshow-office-android-ticket-android.jpg",
        handler: () => {
            alert("Payment Done")
        },
        theme: { color: "#c4242d" }
    };
    let rzp = new window.Razorpay(options);
    rzp.open();
};

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
                <div className="flex flex-col items-start gap-3">
                    <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
                    <div className="flex items-start gap-2 bg-yellow-100 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
                        <div className="w-8 h-8">
                            <BiMoviePlay className="w-full h-full" />
                        </div>

                        <div className="flex flex-col items-start">
                            <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
                            <p className="test-gray-600 text-sm">
                                Get Rs.75* off on 3 movies you buy/rent on Strem. Buy Filmy Pass @Rs.99
                            </p>
                        </div>
                    </div>
                </div>
                <button onClick={launchRazorPay} class="mt-4 bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded">
                    Book tickets
                </button>
            </div>
        </>
    );
};

export default Movie;