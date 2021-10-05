import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        setState((state) => ({
            ...state,
            loading: false
        }));
        getGifs(category)
                .then((images) => {
                    setState({
                        data: images,
                        loading: false
                    })
                });
    }, []);

    return state;
}
