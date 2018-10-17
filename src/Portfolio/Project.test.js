import React from 'react';
import { mount } from 'enzyme';

import Project from './Project';

it('contains specific data in props', () => {
  const wrapper = mount(<Project data={[{ name: 'AoE 2 - Tech Tree' }]} />);

  expect(wrapper.props().data).toContainEqual(
    expect.objectContaining({ name: 'AoE 2 - Tech Tree' })
  );
});
