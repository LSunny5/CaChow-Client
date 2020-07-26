import React from 'react';
import ReactDOM from 'react-dom';
import DeleteUserPage from './DeleteUserPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`DeleteUserPage route`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {
            history: {
                push: () => { }
            }
        };
        ReactDOM.render(
            <BrowserRouter>
                <DeleteUserPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the DeleteUserPage form', () => {
        const wrapper = shallow(<DeleteUserPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});