import React from 'react';
import '@testing-library/jest-dom';

import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests on <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('It should render <AddCategory /> component correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('It should change input box', () => {
        const input = wrapper.find('input');
        const value = 'Hello World';
        input.simulate('change', { target: { value } });

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( value );
    });


    test('It should NOT send the information on submit', () => {
        const form = wrapper.find('form');
        // preventDefault(){} => forma corta de preventDefault: () => {};
        form.simulate('submit', {
            preventDefault(){}
        });

        wrapper.update();
        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('It should call the setCategories and clean the input box', () => {

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value: 'New Message' } });

        // 2. simular el submit
        wrapper.find('form').simulate('submit', {
            preventDefault(){}
        });

        // 3. setCategories se debe de haber llamado
        expect( setCategories ).toHaveBeenCalled();

        // 4. el valor del input debe estar ''
        expect(  wrapper.find('input').prop('value') ).toBe( '' );

    });

});