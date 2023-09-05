import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../Redux/countries/countriesSlice";
import './HomePage.css';
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { data, loading, error } = useSelector((state) => state.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the fetchCountries action when the component mounts
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="country">
        <div className="search"></div>
        <div className="countriesList">
          
         
          <ul className="lists">
            {data.map((country) => (
              <li key={country.countryID}>
                 <NavLink to = {`/details/${country.countryID}`}>
                <h3>{country.name}</h3>
                <img src={country.flag} alt={`${country.name} Flag`} />
                </NavLink>
              </li>
            ))}
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default HomePage;
