import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {

    // useFetchGifs.mockReturnValue({ data: [], loading: true });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('It should render <GifGrid /> component correctly', () => {
        useFetchGifs.mockReturnValue({ data: [], loading: true });
        const wrapper = shallow(<GifGrid category={"Smash"} />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('It should show items when images are loaded using useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jps',
            title: 'Cualquier cosa'
        }];
        useFetchGifs.mockReturnValue({ data: gifs, loading: false });

        const wrapper = shallow(<GifGrid category={"Smash"} />);

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBeFalsy();
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });

});