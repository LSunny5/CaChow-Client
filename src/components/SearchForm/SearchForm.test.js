

import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`SearchForm component`, () => {
    const props = {
        updateSearch: () => { },
    }

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <BrowserRouter>
                <SearchForm {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the SearchForm form', () => {
        const wrapper = shallow(<SearchForm {...props} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});