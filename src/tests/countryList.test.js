import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CountryListControls from '../components/countryListControls';

describe('CountryListControls Component', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <CountryListControls
        search=""
        setSearch={() => {}}
        sortOrder="asc"
        handleSort={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('handles search input', () => {
    const setSearchMock = jest.fn();
    const { getByPlaceholderText } = render(
      <CountryListControls
        search=""
        setSearch={setSearchMock}
        sortOrder="asc"
        handleSort={() => {}}
      />
    );

    const inputElement = getByPlaceholderText('Search Country');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(setSearchMock).toHaveBeenCalledWith('test');
  });

  it('handles sort button click', () => {
    const handleSortMock = jest.fn();
    const { getByText } = render(
      <CountryListControls
        search=""
        setSearch={() => {}}
        sortOrder="asc"
        handleSort={handleSortMock}
      />
    );

    const sortButton = getByText('Sort Ascending');
    fireEvent.click(sortButton);

    expect(handleSortMock).toHaveBeenCalled();
  });
});
