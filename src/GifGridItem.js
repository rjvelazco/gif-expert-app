import React from 'react'

export const GifGridItem = ({title, url}) => {
    console.table({title, url});
    return (
        <div>
            <img src={url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
