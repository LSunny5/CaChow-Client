import React from 'react';
import ReactDOM from 'react-dom';
import RegistrationPage from './RegisterPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`RegistrationPage component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {
            history: {
                push: () => { }
            }
        };
        ReactDOM.render(
            <BrowserRouter>
                <RegistrationPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the RegistrationPage route', () => {
        const wrapper = shallow(<RegistrationPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});