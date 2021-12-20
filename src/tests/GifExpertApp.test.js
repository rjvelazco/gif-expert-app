import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

// Component
import GifExpertApp from '../GifExpertApp';

describe('test on <GifExpertApp /> component', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('It should render <GifExpertApp /> component correctly', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('It should show a list of categories', () => {
        const categories = ['One Punch', 'Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })

});