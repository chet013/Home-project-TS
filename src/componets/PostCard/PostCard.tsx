import React from 'react';
import { Card, Button, Typography } from 'antd';
import './style.css'

const PostCard: React.FC = (posts) => (
    <div className='card'>
        <Card bordered={false} >
            <div className='card-person'>
                <Typography.Text className='card-text'>id: ID</Typography.Text>
                <Typography.Text className='card-text'>name: PETYA PUPKIN </Typography.Text>
            </div>
            <div className='card-content'>
                <Typography.Title
                    level={4}
                    className='card-title'>
                    Title: Description details
                </Typography.Title>
                <Button className='card-button' type="primary">More</Button>
            </div>
        </Card>
    </div>

);

export default PostCard;