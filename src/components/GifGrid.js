import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    
    const { data:images, loading } = useFetchGifs(category);

    return (
        <>
            <h3 className="card-grid animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="card-grid animate__animated flash">Loading</p> }

            <div className="card-grid animate__animated animate__fadeIn">
                { 
                    images.map((img) => (
                        <GifGridItem
                            key={img.id}
                            category={category}
                            {...img}
                        />
                        // img={img}
                    ))
                }
            </div>
        </>
    )
}


GifGrid.protoTypes = {
    category: PropTypes.string.isRequired
}