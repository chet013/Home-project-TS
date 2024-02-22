import React from 'react';
import './style.css';
import { PostCard } from '../../componets/PostCard/PostCard';
import { Post } from '../../types';

type ListingPageProps = {
    posts: Post[];
}

export const ListingPage = ({ posts }: ListingPageProps) => {
    return (
        <div className='page'>
            {posts.map((post) => {
                return (
                    <div className='cardWrapper' key={post.id}>
                        <PostCard
                            id={post.id}
                            autorName={post.autorName}
                            title={post.title}
                        />
                    </div>
                )
            }
            )}
        </div>
    );
};