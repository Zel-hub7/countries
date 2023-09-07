import React from 'react';
import renderer from 'react-test-renderer';
import NavBar from '../components/NavBar';

test('renders NavBar correctly', () => {
  // Render the NavBar component to a JSON tree
  const tree = renderer.create(<NavBar />).toJSON();

  // Use Jest's snapshot testing to compare the rendered output to the saved snapshot
  expect(tree).toMatchSnapshot();
});
