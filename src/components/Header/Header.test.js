import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';
import Navigations from './Navigations/Navigations';

describe('<Header />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Header />);
    })

    it('should be rendered', () => {
        expect(wrapper.length).toBe(1);
    });

    it('should contains <Navigations />', () => {
        expect(wrapper.contains(<Navigations />)).toBe(true);
    })
})