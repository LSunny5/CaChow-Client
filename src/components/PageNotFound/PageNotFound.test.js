import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PageNotFound from './PageNotFound';

describe(`PageNotFound component`, () => {
    it('renders the PageNotFound by default', () => {
        const wrapper = shallow(<PageNotFound />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
