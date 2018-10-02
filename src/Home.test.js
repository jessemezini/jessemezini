import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { finished } from 'stream';

it('renders without crashing', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.exists()).toBe(true);
});

it('renders welcome message', () => {
  const wrapper = shallow(<Home />);
  const welcome =
    'Hello, my name is Jesse Mezini and I work with Web Development.';
  expect(wrapper.contains(welcome)).toEqual(true);
});

it('renders 3 contact icons', () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find('a').length).toBe(3);
});
