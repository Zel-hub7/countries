import React from 'react';
import { FaSortAlphaDown } from 'react-icons/fa';

const CountryListControls = ({
  search, setSearch, sortOrder, handleSort,
}) => (
  <div className="search">
    <input
      value={search}
      type="text"
      placeholder="Search Country"
      onChange={(e) => setSearch(e.target.value)}
    />
    <button type="submit" onClick={handleSort}>
      Sort
      {' '}
      {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
      <FaSortAlphaDown className="sort-icon" />
    </button>
  </div>
);

export default CountryListControls;
