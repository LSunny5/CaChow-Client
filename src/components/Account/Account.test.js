import React from 'react';
import ReactDOM from 'react-dom';
import Account from './Account';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`Account component`, () => {
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
        r_hours: 1
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <Account {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the Account form', () => {
        const wrapper = shallow(<Account {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});