import React from 'react';
import { shallow } from 'enzyme';

import { GifGridItem } from '../../components/GifGridItem';

describe('Tests on <GifGridItem />', () => {

    const title = 'Title';
    const url = 'https://localhost/algo.jpg';
    const category = 'Anime';
    const wrapper = shallow(
        <GifGridItem title={title} url={url} category={category} />
    );


    test('It should render GrifGridItem Component Correctly', () => {

        // wrapper.setProps({ title: 'setProps Methods' });
        // wrapper.update();
        expect(wrapper).toMatchSnapshot();

    });

    test('It should have a <p> with the title', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe(title);
    });

    test('It should have a <img> with the url and alt props value', () => {
        const img = wrapper.find('img');
        // console.log( img.props() );
        // img.props() -> Todos los props;
        // img.prop('porpName') -> Solo el prop especificado.
        expect( img.props().src ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    });

    test('It should have a <div> with the class "card"', () => {
        const div = wrapper.find('div');
        // console.log(div.props());
        expect( div.prop('className') ).toContain('card');
    })

});
