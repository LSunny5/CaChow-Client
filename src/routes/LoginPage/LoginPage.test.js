import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`LoginPage route`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {
            location: {},
            history: {
                push: () => { }
            }
        };
        ReactDOM.render(
            <BrowserRouter>
                <LoginPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the LoginPage form', () => {
        const wrapper = shallow(<LoginPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});