import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';
import './details.css';

const Details = () => {
  const { countryId } = useParams();
  const { data } = useSelector((state) => state.countries);
  const countryDetails = data.find((country) => country.countryID === countryId);
  const navigation = useNavigate();

  if (!countryDetails) {
    return (
      <div>
        <p className='not-found'>Country not found</p>
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
    <div className="details-container">
      <div className="details-country">
        <div className="background">
          <button
            type="button"
            onClick={() => navigation('/')}
            className="back-btn"
          >
            <BiArrowBack />
          </button>
        </div>
        <h2 className="header">
          {countryDetails.name}
          &apos;s Details
        </h2>
      </div>
      <div className="container">
        <img src={countryDetails.flag} alt={countryDetails.name} />
        <div className="flex-container">
          <h2 className="country-name-details">{countryDetails.name}</h2>
          <h3 className="country-details-off">
            Official Name:
            {' '}
            {countryDetails.officialName}
          </h3>
          <h4 className="country-details">
            Capital City:
            {' '}
            {countryDetails.capital}
          </h4>
          <h4 className="country-details">
            Continent:
            {' '}
            {countryDetails.continent}
          </h4>
          <h4 className="country-details">
            Population:
            {' '}
            {countryDetails.population}
          </h4>
          <h4 className="country-details">
            Area:
            {countryDetails.area}
          </h4>
          <h4 className="country-details">
            Timezone:
            {countryDetails.timezone[0]}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
