import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import Details from "./components/details";

const App = () => (
  <div>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/details/:countryId" element={<Details />} />
    </Routes>
  </div>
);
export default App;
