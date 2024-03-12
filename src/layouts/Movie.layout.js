import React from "react";

//Component
//import Navbar from "../components/Navbar/nabvar.component";
import MovieNavbar from "../components/Navbar/movieNavbar.component";


const MovieLayout = (props) => {
    return (
        <>
            <MovieNavbar />

            {props.children}
        </>

    );
};

export default MovieLayout;