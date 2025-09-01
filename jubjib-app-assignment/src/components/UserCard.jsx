import React from 'react';
import Pic from './pic.jpg';

const Avatar = () => (
    <img 
        src={Pic}
        alt="User Avatar"
        style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            border: '2px solid #3E5F44'
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#3E5F44', margin: '10px 0' }}>
        นางสาวพรรณธร จันทร์สายทอง
    </h3>
);

const UserBio = () => (
    <p style={{ color: '#3E5F44', fontSize: '14px' }}>
        นักศึกษาชั้นปีที่ 3 มหาวิทยาลัยศิลปากร วิทยาเขตพระราชวังสนามจันทร์ 
        คณะวิทยาศาสตร์ ภาควิชาคอมพิวเตอร์ สาขาเทคโนโลยีสารสนเทศ
    </p>
);

const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #3E5F44',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#E8FFD7',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;