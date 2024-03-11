import React from "react";
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.component";
//import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPoster.config";

const HomePage = () => {
    return (<>
        <div className="flex flex-col gap-10">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-gray-800">The Best of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className="bg-navCol-300 py-16">

                <div className="container mx-auto px-4 ">
                    <div className="flex">
                        <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png" alt="Rupay" className="w-full h-full" />
                    </div>
                    <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand New Releases Every Friday " isDark />
                </div>
            </div>

            <div className="container mx-auto px-4">
                <PosterSlider images={TempPosters} title="Online Streaming Events" isDark={false} />

            </div>
        </div>

    </>
    );
};

export default HomePage;