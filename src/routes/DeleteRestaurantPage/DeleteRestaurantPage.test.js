import React from 'react';
import ReactDOM from 'react-dom';
import DeleteRestaurantPage from './DeleteRestaurantPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`DeleteRestaurantPage route`, () => {
    const props = {
        match: {
            params: {
                r_id: 1
            }
        },
        r_id: 1,
        r_owner: 'Owner',
        r_image: 'None',
        r_type: 'Fast',
        r_name: 'Restaurant One',
        r_address: 'Address',
        r_city: 'City',
        r_state: 'State',
        r_zip: 'Zip',
        r_phone: 'Phone',
        r_hours: 1, 
        history: {
            push: () => { }
        }, 
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <DeleteRestaurantPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the EditRestaurantPage form', () => {
        const wrapper = shallow(<DeleteRestaurantPage {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
});