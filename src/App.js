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



import DefaultComponent from "./HOC/Default.HOC";

//Component
import Temp from "./components/temp";




function App() {
  return (
    <>

      <DefaultComponent path="/" component={<Temp />} />



    </>







  );
}

export default App;

