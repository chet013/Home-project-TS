import React from 'react';
import './style.css';
import PostCard from '../PostCard/PostCard';
import { PostType } from '../../types'

export const Page = () => {
    return (
        <div className='page'>
            <div className='cardWrapper'>
                <PostCard id={1} autorName={"autorName"} title={"title"} />
            </div>
        </div>
    );
};
