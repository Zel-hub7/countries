import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../Redux/countries/countriesSlice";

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
          <h2>List of Countries</h2>
          <ul>
            {data.map((country) => (
              <li key={country.countryID}>
                <h3>{country.name}</h3>
                <img src={country.flag} alt={`${country.name} Flag`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
