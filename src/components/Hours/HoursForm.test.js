import React from 'react';
import ReactDOM from 'react-dom';
import HoursForm from './HoursForm';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`HoursForm component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {
            nextLocation: '/account'
        };
        ReactDOM.render(
            <BrowserRouter>
                <HoursForm {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the RegistrationPage route', () => {
        const wrapper = shallow(<HoursForm />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});