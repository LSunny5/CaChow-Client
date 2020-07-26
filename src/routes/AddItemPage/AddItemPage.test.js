import React from 'react';
import ReactDOM from 'react-dom';
import AddItemPage from './AddItemPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`AddItemPage component`, () => {
    const props = {
        match: {
            params: {
                r_id: 1
            }
        },
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <AddItemPage {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the AddItemPage form', () => {
        const wrapper = shallow(<AddItemPage {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});
