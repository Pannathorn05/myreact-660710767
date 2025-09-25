import { Link } from 'react-router-dom'
import React from 'react';

const BookPage = () => {
    return (
        <div 
            style={{
                textAlign:"center"
            }}>
            <h1>Welcome to the BookPage</h1>
            <Link to="/category/fiction"> Go to Category</Link>
        </div>
    )
} 

export default BookPage;