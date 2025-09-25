import { Link } from 'react-router-dom'
import React from 'react';

const Contact = () => {
    return (
        <div 
            style={{
                textAlign:"center"
            }}>
            <h1>Welcome to the Contact</h1>
            <Link to="/"> Go to HomePage</Link>
        </div>
    )
} 

export default Contact;