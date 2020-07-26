import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './SearchPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`SearchPage route`, () => {
    const props = {
        r_id: 1,
        r_owner: 'OwnerS',
        r_image: 'NoneS',
        r_type: 'Fast',
        r_name: 'Restaurant Two',
        r_address: 'Address2',
        r_city: 'City2',
        r_state: 'State2',
        r_zip: 'Zip2',
        r_phone: 'Phone2',
        r_hours: 1,
        categories: {
            cat_id: 1
        }
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <SearchPage { ...props } />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    /* it('renders the SearchPage form', () => {
        const wrapper = shallow(<SearchPage {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    }) */
});