import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = 'Welcome to React';
  expect(wrapper.contains(welcome)).toEqual(true);
});