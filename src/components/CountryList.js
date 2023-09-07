import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCountries } from '../Redux/countries/countriesSlice';

const CountryList = ({ search, sortOrder }) => {
  const { data, loading, error } = useSelector((state) => state.countries);
  const [sortedCountries, setSortedCountries] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const searchCountries = data.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    const sortedData = [...searchCountries].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === 'asc' ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    setSortedCountries(sortedData);
  }, [searchCountries, sortOrder]);

  if (loading) {
    return <div><h2>Loading...</h2></div>;
  }

  if (error) {
    return <div><h2>{error}</h2></div>;
  }

  return (
    <div className="countriesList">
      <ul className="lists">
        {sortedCountries.map((country) => (
          <li key={country.countryID}>
            <NavLink to={`/details/${country.countryID}`}>
              <img className="flags" src={country.flag} alt={`${country.name} Flag`} />
              <h2 className="name">{country.name}</h2>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryList;
