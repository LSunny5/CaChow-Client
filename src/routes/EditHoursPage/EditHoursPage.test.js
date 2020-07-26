import React from 'react';
import ReactDOM from 'react-dom';
import EditHoursPage from './EditHoursPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`EditHoursPage route`, () => {
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
                    <EditHoursPage {...props} />
                </BrowserRouter>, div);
            ReactDOM.unmountComponentAtNode(div);
        });

    it('renders the EditHoursPage form', () => {
        const wrapper = shallow(<EditHoursPage {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});