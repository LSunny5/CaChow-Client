import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantForm from './RestaurantForm';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`RestaurantForm component`, () => {
    const props = {
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
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <RestaurantForm {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the RestaurantForm form', () => {
        const wrapper = shallow(<RestaurantForm {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});