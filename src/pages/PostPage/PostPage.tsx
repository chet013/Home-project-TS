import React from 'react';
import './style.css';
import { Typography, Button, Flex, Alert, Spin } from 'antd'
import { postText } from '../../types';

const { Text, Title } = Typography

type PostPageProps = {
    posts: postText[];
    error: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
    loading: boolean;
}

export const PostPage = ({ posts, error, loading, onClick }: PostPageProps) => {
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

    return (
        <div className='post'>
            {posts.map((post) => {
                console.log(post)
                return (
                    <div className='post-wrapper' key={post.id}>
                        <Title
                            italic
                            type='secondary'
                            id={post.userId.toString()}
                        >
                            {post.autorName}`s text
                        </Title>
                        <Text
                            strong
                            className='post-text'
                            id={post.id.toString()}
                        >
                            {post.body}
                        </Text>
                    </div>
                )
            })}

            <Flex gap='small' className='buttonsGroupe'>
                <Button type='dashed'>Return to posts</Button>
                <Button type='primary'>Add comment</Button>
            </Flex>
        </div >
    )

}