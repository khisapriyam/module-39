import React, { useContext } from 'react';
import Category from '../Categories/Category';
import { CategoryContext } from '../../App';

const Home = () => {
    const category = useContext(CategoryContext)
    
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>this is home: {category}</h1>
            <Category></Category>
        </div>
    );
};

export default Home;