import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const input = useRef();
    const handleInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length) {
            setCategories((categories) => [inputValue, ...categories]);
            // setCategories(123456789);
            setInputValue('');
        }
    }

    // Manage input here to avoid fail the test
    // because we are not simulation the DOM on tests in this section
    // useEffect(()=> {
    //     if( !inputValue.length ) {
    //         input.current.value='';
    //     }
    // }, [inputValue])

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input
                ref={input}
                type="text"
                placeholder="Add Category"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};