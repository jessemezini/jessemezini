import React from 'react';
import { shallow } from 'enzyme';

import Resume from './Resume';

it('renders without crashing', () => {
  const wrapper = shallow(<Resume />);
  expect(wrapper.exists()).toEqual(true);
});
