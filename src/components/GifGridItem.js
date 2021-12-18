import React from 'react';
import PropTypes from 'prop-types';

export const GifGridItem = ({category, title, url}) => {
    const repTitle =  `${ category } - gif`.toUpperCase();
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{ title ? title : repTitle }</p>
        </div>
    )
}

GifGridItem.prototype = {
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}