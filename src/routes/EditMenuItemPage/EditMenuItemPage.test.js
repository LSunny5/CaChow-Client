import React from 'react';
import ReactDOM from 'react-dom';
import EditMenuItemPage from './EditMenuItemPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`EditMenuItemPage component`, () => {
    const props = {
        cat_id: 1,
        cat_name: 'Cat 1',
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
                <EditMenuItemPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the EditMenuItemPage form', () => {
        const wrapper = shallow(<EditMenuItemPage {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});