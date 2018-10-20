import React from 'react';
import { shallow } from 'enzyme';

import Portfolio from './Portfolio';

import data from './data';

it('renders without error', () => {
  const wrapper = shallow(<Portfolio />);
  expect(wrapper.exists()).toEqual(true);
});

it('loads data', () => {
  const wrapper = shallow(<Portfolio />);
  expect(wrapper.state().data).toEqual(data);
});

it('contains specific data in array', () => {
  const wrapper = shallow(<Portfolio />);
  expect(wrapper.state().data).toContainEqual(
    expect.objectContaining({ name: 'AoE 2 - Tech Tree' })
  );
});
