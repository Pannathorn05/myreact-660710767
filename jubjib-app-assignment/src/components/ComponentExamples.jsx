import React from 'react';
import Clock from './Clock';
import UserCard from './UserCard';
import TodoList from './TodoList';

function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#A3DC9A'
        }}>
            <h1 style={{
                textAlign: 'center',
                color: '#0A400C',
                marginBottom: '40px'
            }}>
                Assignment Week 6
            </h1>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #3E5F44',
                borderRadius: '8px',
                backgroundColor: '#E8FFD7'
            }}>
                <h2 style={{ color: '#3E5F44', marginBottom: '20px' }}>
                    Time
                </h2>
                <Clock />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #3E5F44',
                borderRadius: '8px',
                backgroundColor: '#E8FFD7'
            }}>
                <h2 style={{ color: '#3E5F44', marginBottom: '20px' }}>
                    User Card
                </h2>
                <UserCard />
            </section>
            
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #3E5F44',
                borderRadius: '8px',
                backgroundColor: '#E8FFD7'
            }}>
                <h2 style={{ color: '#3E5F44', marginBottom: '20px' }}>
                    To-Do List
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;