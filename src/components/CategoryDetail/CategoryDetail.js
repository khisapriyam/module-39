import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext);
    
    return (
        <div>
            <h4>this is your category detail er data dorkar: </h4>
            <h5>selected category: {category}</h5>

        </div>
    );
};

export default CategoryDetail;