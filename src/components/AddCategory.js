import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const input = useRef(null);
    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length) {
            setCategories((categories) => [inputValue, ...categories]);
            setInputValue('');
            input.current.value='';
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={input}
                type="text"
                placeholder="Add Category"
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func
};