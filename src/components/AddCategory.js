import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSumit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setcategories(values =>[inputValue,...values]);
            setinputValue('');
        }
        
    }

    return (
        <form onSubmit={handleSumit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
