import React from 'react';
import './style.css';
import { Spin, Empty, Alert, Button } from 'antd';
import { PostCard } from '../../componets/PostCard/PostCard';
import { Post } from '../../types';

type ListingPageProps = {
    posts: Post[];
    loading: boolean;
    error: boolean;
    tryAgeinFetch: React.MouseEventHandler<HTMLElement>;
}

export const ListingPage = ({ posts, loading, error, tryAgeinFetch }: ListingPageProps) => {

    if (error) {
        return (
            <Alert
                className='alert'
                message="Error Text"
                showIcon
                description="Error Description Error Description Error Description Error Description"
                type="error"
                action={
                    <Button size="small" danger onClick={tryAgeinFetch}>
                        Close and try again.
                    </Button>
                }
            />
        )
    }

    if (loading) {
        return (
            <Spin
                fullscreen
                size="large"
                tip="looking on the shelf..."
            />
        )
    }

    if (posts.length === 0) {
        return (
            <Empty className='empty' />
        )
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