import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navigation from '../../src/components/Navigation/Navigation';
import DefaultLayout from '../../src/components/Layout/DefaultLayout';
import PhoneLink from '../../src/components/Link/PhoneLink';

configure({ adapter: new Adapter() });

const menuItems = [{key: "key1", link: "/blah", linkText: "My Link 1"},{key: "key2", link: "/blah", linkText: "My Link 1"}]

describe('PhoneLink', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<PhoneLink number="123456" />, div)
    });
});

describe('DefaultLayout', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(shallow(<DefaultLayout config={{title: "title", strapline: "strapline", menuItems}}/>), div)
    });
});

describe('Navigation', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(shallow(<Navigation menuItems={menuItems} />), div)
    });
});

