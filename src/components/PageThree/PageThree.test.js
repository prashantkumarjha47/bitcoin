import React from 'react';
import { shallow } from 'enzyme';
import { PageThree } from './PageThree';

const props = {
    Store: {
        currency: ''
    },
    history: {
        replace: jest.fn()
    }
}

it('render without crash', () => {
    const wrapper = shallow(<PageThree {...props} />);
});