import React, { useState, useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [categoryCount , setCategoryCount] = useContext(CategoryContext);
    //const{ setCount} = props;
    
    return (
        <div>
            <h1>This is header: {categoryCount}</h1>
            <button onClick = {()=> setCategoryCount(categoryCount + 1)}>Increment</button>
        </div>
    );
};

export default Header;