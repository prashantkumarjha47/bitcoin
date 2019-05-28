import React from 'react';
import { shallow } from 'enzyme';
import PageTwo from './PageTwo';
const props = {
    Store: {
        currency: ''
    },
    history: {
        replace: jest.fn()
    }
}
it('render without crash', () => {
    const wrapper = shallow(<PageTwo {...props} />);
});