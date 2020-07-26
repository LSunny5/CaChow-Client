import React from 'react';
import ReactDOM from 'react-dom';
import MenuItemForm from './MenuItemForm';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`Menu Item Form component`, () => {
    const props = {
        restId:1,
        r_id: 1,
        r_owner: 'menuTest',
        r_image: 'NameTest',
        r_type: 'Fine',
        r_name: 'Test Restaurant',
        r_address: 'AddressTest',
        r_city: 'CityTest',
        r_state: 'StateTest',
        r_zip: 'Zip Test',
        r_phone: 'PhoneTest',
        r_hours: 1,
        cat_id: 1,
        cat_name: 'Cat Name',
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <MenuItemForm {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    /* it('renders the MenuItemForm form', () => {
        const wrapper = shallow(<MenuItemForm {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    }) */
});