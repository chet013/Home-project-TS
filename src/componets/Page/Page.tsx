import React from 'react';
import './style.css';
import PostCard from '../PostCard/PostCard';

export const Page = () => {
    return (
        <div className='page'>
            <div className='cardWrapper'>
                <PostCard />
            </div>
            <div className='cardWrapper'>
                <PostCard />
            </div>
            <div className='cardWrapper'>
                <PostCard />
            </div>
            <div className='cardWrapper'>
                <PostCard />
            </div>
            <div className='cardWrapper'>
                <PostCard />
            </div>
        </div>
    );
};
