import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaSortAlphaDown } from "react-icons/fa";
import { fetchCountries } from "../Redux/countries/countriesSlice";
import "./HomePage.css";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  const { data, loading, error } = useSelector((state) => state.countries);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedCountries, setSortedCountries] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const searchCountries = data.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const sortedData = [...searchCountries].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setSortedCountries(sortedData);
  }, [searchCountries, sortOrder]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

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
        <div className="search">
          <input
            value={search}
            type="text"
            placeholder="Search Country"
            onChange={handleSearch}
          />
          <button type="submit" onClick={handleSort}>
            Sort {sortOrder === "asc" ? "Ascending" : "Descending"}
            <FaSortAlphaDown className="sort-icon" />
          </button>
        </div>
        <div className="countriesList">
          <ul className="lists">
            {sortedCountries.map((country) => (
              <li key={country.countryID}>
                <NavLink to={`/details/${country.countryID}`}>
                  <img
                    className="flags"
                    src={country.flag}
                    alt={`${country.name} Flag`}
                  />
                  <h2 className="name">{country.name}</h2>
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
