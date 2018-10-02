import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import { finished } from 'stream';

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome =
    'Hello, my name is Jesse Mezini and I work with Web Development.';
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders 3 contact icons', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('a').length).toBe(3);
});
