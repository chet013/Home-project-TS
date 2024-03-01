import React from 'react';
import { Card, Button, Typography } from 'antd';
import './style.css';

type PostCardProps = {
    id: number,
    autorName: string,
    title: string,
}

const { Text } = Typography

export const PostCard = ({ id, autorName = 'Autor name', title }: PostCardProps) => {
    return (
        <div className='card'>
            <Card
                title={id}
                extra={<Text italic type='secondary'>{autorName}</Text>}
                bordered={false}
                actions={[
                    <Button className='card-button' type="primary">More</Button>
                ]}
            >
                <div className='card-content'>
                    <Text strong >
                        Title: {title.slice(0, 27)}...
                    </Text>
                </div>
            </Card>
        </div>
    )
}