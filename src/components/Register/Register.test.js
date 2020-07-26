import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationForm from './Register';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`RegistrationForm route`, () => {
    const props = {
        error: {}, 
        onRegistrationSuccess: () => {}, 
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <RegistrationForm {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the RegistrationForm form', () => {
        const wrapper = shallow(<RegistrationForm {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});