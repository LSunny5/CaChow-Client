import React from 'react';
import ReactDOM from 'react-dom';
import Restaurant from './Restaurant';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`Restaurant component`, () => {
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
        cat_id: 1,
        cat_name: 'Cat 1',
        hours_id: 1,
        sun_open: 'Open',
        sun_close: 'Closed',
        mon_open: 'Open',
        mon_close: 'Closed',
        tues_open: 'Open',
        tues_close: 'Closed',
        wed_open: 'Open',
        wed_close: 'Closed',
        thu_open: 'Open',
        thu_close: 'Closed',
        fri_open: 'Open',
        fri_close: 'Closed',
        sat_open: 'Open',
        sat_close: 'Closed',
        hours_owner: 'owner 1',
        item_id: 1,
        item_restaurant: 1,
        item_name: 'Item name',
        item_cat: 1,
        item_price: 1.23,
        match: {
            params: {
                r_id: 1
            }
        },
    };

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Restaurant {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Restaurant form', () => {
        const wrapper = shallow(<Restaurant {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});