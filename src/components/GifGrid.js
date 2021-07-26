import React from 'react'

export const GifGrid = ({ category }) => {
    const api_key = 'GyTgDRvJi4SIjxKQSRDSKA5CNussIOTV';
    const getGifs = async () => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${api_key}`;
        const resp = await fetch( url);
        const { data } = await resp.json();

        const gifs = data.map( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })

        console.log(gifs);

    }
    getGifs();
    return (
        <div>
            <h3>{ category }</h3>
        </div>
    )
}
