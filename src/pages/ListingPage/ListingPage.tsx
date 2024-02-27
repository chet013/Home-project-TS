import React from 'react';
import './style.css';
import { Spin, Empty, Alert } from 'antd';
import { PostCard } from '../../componets/PostCard/PostCard';
import { Post } from '../../types';

type ListingPageProps = {
    posts: Post[];
    loading: boolean;
    error: boolean;
}

export const ListingPage = ({ posts, loading, error }: ListingPageProps) => {

    if (loading) {
        return (
            <Spin
                fullscreen
                size="large"
                tip="looking on the shelf..." />
        )
    } else if (posts.length === 0) {
        return <Empty className='empty' />
    } else if (error) {
        <Alert message="Error Text" type="error" />
    }

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