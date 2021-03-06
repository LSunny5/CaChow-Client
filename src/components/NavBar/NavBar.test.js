import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import toJson from 'enzyme-to-json'
import { shallow } from 'enzyme'
import { BrowserRouter } from 'react-router-dom';

describe(`NavBar component`, () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        const props = {
            history: {
                push: () => { }
            }
        };
        ReactDOM.render(
            <BrowserRouter>
                <NavBar {...props} />
            </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the NavBar form', () => {
        const wrapper = shallow(<NavBar />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
});
