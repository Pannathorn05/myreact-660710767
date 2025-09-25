import { Link } from 'react-router-dom'
import React from 'react';

const About = () => {
    return (
        <div 
            style={{
                textAlign:"center"
            }}>
            <h1>Welcome to the About</h1>
            <Link to="/contact"> Go to Contact</Link>
        </div>
    )
} 

export default About;