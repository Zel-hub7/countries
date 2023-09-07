import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiFillSetting } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { BiArrowBack } from "react-icons/bi";
import "./details.css";

const Details = () => {
  const { countryId } = useParams();
  const { data } = useSelector((state) => state.countries);
  const countryDetails = data.find(
    (country) => country.countryID === countryId
  );
  const navigation = useNavigate();

  if (!countryDetails) {
    return (
      <div>
        <p className="not-found">Country not found</p>
        <button
          type="button"
          onClick={() => navigation(-1)}
          className="back-btn"
        >
          <BiArrowBack />
        </button>
      </div>
    );
  }

  return (
    <div className="det">
      <div className="details-navBar">
        <button
          type="button"
          onClick={() => navigation("/")}
          className="back-btn"
        >
          <BiArrowBack />
        </button>

        <h1 className="header">{countryDetails.name}&apos;s Details</h1>
        <div className="buttons">
          <BiMicrophone data-testid="microphone-button" />{" "}
          <AiFillSetting data-testid="settings-button" />{" "}
        </div>
      </div>
      <div className="details-container">
        <div className="container">
          <div className="upper">
            <img src={countryDetails.flag} alt={countryDetails.name} />
            <h2 className="country-name-details">{countryDetails.name}</h2>
          </div>

          <div className="flex-container">
            <div className="country-details">
              <h3>Capital City</h3>
              <h3>{countryDetails.capital}</h3>
            </div>

            <div className="country-details">
              <h3>Continent</h3>
              <h3>{countryDetails.continent}</h3>
            </div>

            <div className="country-details">
              <h3>Population</h3>
              <h3>{countryDetails.population}</h3>
            </div>

            <div className="country-details">
              <h3>Area</h3>
              <h3>{countryDetails.area}</h3>
            </div>

            <div className="country-details">
              <h3>Timezone</h3>
              <h3>{countryDetails.timezone[0]}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
