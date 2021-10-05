import React from 'react'

export const GifGridItem = ({category, title, url}) => {
    const repTitle =  `${category } - gif`.toUpperCase();
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{ title ? title : repTitle }</p>
        </div>
    )
}
