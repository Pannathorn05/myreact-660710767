import { Link } from 'react-router-dom'
import React from 'react';

const Category = () => {
    return (
        <div 
            style={{
                textAlign:"center"
            }}>
            <h1>Welcome to the Category</h1>
            <Link to="/about"> Go to About</Link>
        </div>
    )
} 

export default Category;