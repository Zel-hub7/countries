import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiArrowBack } from "react-icons/bi";

const Details = () => {
  const { countryId } = useParams();
  const { data } = useSelector((state) => state.countries);
  const countryDetail = data.find((country) => country.countryID === countryId);
  const navigation = useNavigate();

  if (!countryDetail) {
    return (
      <div>
        <p>Country not found</p>
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
    <div>
      <h2>{countryDetail.name}</h2>
      <p>Country ID: {countryDetail.countryID}</p>

      <button
          type="button"
          onClick={() => navigation(-1)}
          className="back-btn"
        >
          <BiArrowBack />
        </button>
    </div>
  );
};

export default Details;
