import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Fire Force']);

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
