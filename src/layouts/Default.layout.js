import React from "react";

//Component
import Navbar from "../components/Navbar/nabvar.component";
import HeroCarousal from "../components/HeroCarousel/HerCarousel.component";

const DefaultLayout = (props) => {
    return (
        <>
            <Navbar />
            <HeroCarousal />
            {props.children}
        </>

    );
};

export default DefaultLayout;