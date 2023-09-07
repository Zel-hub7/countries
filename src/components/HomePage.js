import React, { useState } from 'react';
import CountryListControls from './countryListControls';
import CountryList from './CountryList';
import './HomePage.css';
import NavBar from './NavBar';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className="main">
      <NavBar />
      <div className="country">
        <CountryListControls search={search} setSearch={setSearch} sortOrder={sortOrder} handleSort={handleSort} />
        <CountryList search={search} sortOrder={sortOrder} />
      </div>
    </div>
  );
};

export default HomePage;
