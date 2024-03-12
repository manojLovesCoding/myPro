//Transforms component into another conponent
//Adding additional functionalities to the existing components.

import React from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
//import DefaultLayout from "../layouts/Default.layout";
import MovieLayout from "../layouts/Movie.layout";

const MovieHOC = ({ component, ...props }) => {
    return (
        <Routes>
            <Route {...props} element={<MovieLayout>{component}</MovieLayout>} />
        </Routes>
    );
};

export default MovieHOC;