import React from 'react';
import { Card, Button, Typography } from 'antd';
import './style.css';

type PostCardProps = {
    id: number,
    autorName: string,
    title: string,
}

export const PostCard = ({ id, autorName, title }: PostCardProps) => {
    return (
        <div className='card'>
            <Card bordered={false} >
                <div className='card-person'>
                    <Typography.Text className='card-text'>id: {id}</Typography.Text>
                    <Typography.Text className='card-text'>Autor name: {autorName} </Typography.Text>
                </div>
                <div className='card-content'>
                    <Typography.Title
                        level={4}
                        className='card-title'>
                        Title: {title}...
                    </Typography.Title>
                    <Button className='card-button' type="primary">More</Button>
                </div>
            </Card>
        </div>
    )
}