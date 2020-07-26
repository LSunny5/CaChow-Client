import React from 'react';
import ReactDOM from 'react-dom';
import AddHoursPage from './AddHoursPage';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`AddHoursPage route`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <AddHoursPage />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the AddHoursPage form', () => {
        const wrapper = shallow(<AddHoursPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});