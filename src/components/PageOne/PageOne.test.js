import React from 'react';
import { shallow } from 'enzyme';
import PageOne from './PageOne';

it('render without crash', () => {
    const wrapper = shallow(<PageOne />);
});