import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../hooks/useFetchGifs';


describe('Test on useFetchGifs custom hook', () => {

    test('It should return the initial state', async () => {
        // const {data: image, loading } = useFetchGifs( 'Gravity Falls' );
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Gravity Falls' ));
        const {data, loading } = result.current;

        await waitForNextUpdate(); 
        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    });

    test('It should return imgs array and loading value false', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs( 'Gravity Falls' ));

        await waitForNextUpdate();

        const {data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
    });

});