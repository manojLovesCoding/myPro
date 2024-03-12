/*
import { Route, Routes } from "react-router-dom";

function Name() {
  return (
    <h1>Welcome to Home Page</h1>
  );
}

function Name2() {
  return (
    <h1>Welcome to Movie Page</h1>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Name />} />
        <Route path="/movie" exact element={<Name2 />} />
      </Routes>


    </>
  );
}

export default App;
*/

//-------------------------------------------------------------------------------
// eslint-disable-next-line


//HOC
import DefaultComponent from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.Hoc";

//Component
/*import Temp from "./components/temp";*/
import HomePage from "./pages/Home.page";
import Movie from "./pages/Movie.page";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>

      <DefaultComponent path="/" exact component={<HomePage />} />,
      <MovieHOC path="/movie/:id" exact component={<Movie />} />,



    </>







  );
}

export default App;

