import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`LoginForm route`, () => {
    const props = {
        error: {}, 
        onLoginSuccess: () => {}, 
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <LoginForm {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the LoginForm form', () => {
        const wrapper = shallow(<LoginForm {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});