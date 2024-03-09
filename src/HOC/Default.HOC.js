//Transforms component into another conponent
//Adding additional functionalities to the existing components.

import React from "react";
import { Route, Routes } from "react-router-dom";

//Layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultComponent = ({ component, ...props }) => {
    return (
        <Routes>
            <Route {...props} element={<DefaultLayout>{component}</DefaultLayout>} />
        </Routes>
    );
};

export default DefaultComponent;