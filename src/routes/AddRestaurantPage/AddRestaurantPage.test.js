import React from 'react';
import ReactDOM from 'react-dom';
import AddRestaurantPage from './AddRestaurantPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`AddRestaurantPage route`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <AddRestaurantPage />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the AddRestaurantPage form', () => {
        const wrapper = shallow(<AddRestaurantPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});