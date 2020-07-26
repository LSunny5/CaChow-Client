import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LandingPage from './Landing';

describe(`Landing Page component`, () => {
	it('renders the Landing Page by default', () => {
		const wrapper = shallow(<LandingPage />);
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});