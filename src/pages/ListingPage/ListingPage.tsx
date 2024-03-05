import React from 'react';
import './style.css';
import { Spin, Empty, Alert, Button } from 'antd';
import { PostCard } from '../../componets/PostCard/PostCard';
import { Post, Autors } from '../../types';

type ListingPageProps = {
    posts: Post[];
    autors: Autors[],
    loading: boolean;
    error: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
}

export const ListingPage = ({ posts, autors, loading, error, onClick }: ListingPageProps) => {

    if (error) {
        return (
            <Alert
                className='alert'
                message="Ooops. Houston, we have problems. "
                showIcon
                description="Error in server, try again later"
                type="error"
                action={
                    <Button size="small" danger onClick={onClick}>
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
                            autorName={autors.find(autor => autor.id === post.userId)?.name}
                            title={post.title}
                        />
                    </div>
                )
            }
            )}
        </div>
    );



};