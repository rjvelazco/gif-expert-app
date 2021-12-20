import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories = [] }) => {

    // const [categories, setCategories] = useState(['Fire Force']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpert</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <div>
                {categories.map((category) => (
                    <GifGrid
                        key={ category }
                        category={category}
                    />
                ))}
            </div>

        </>
    )
}

export default GifExpertApp;

GifExpertApp.propTypes = {
    GifExpertApp: PropTypes.array
}