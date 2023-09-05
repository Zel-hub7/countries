import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Details from "./components/details";


const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/details/:countryId" element={<Details />} />
      </Routes>
    </div>
  );
};
export default App;
