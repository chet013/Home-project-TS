import React from 'react';
import { Card, Button, Typography } from 'antd';
import './style.css';

type PostCardProps = {
    id: number,
    autorName: string,
    title: string,
}

const { Text } = Typography

const stylesCard = {
    actions: { padding: '0 8px' }
}

export const PostCard = ({ id, autorName = 'Autor name', title }: PostCardProps) => {
    return (
        <div className='card'>
            <Card
                title={id}
                extra={<Text italic type='secondary'>{autorName}</Text>}
                bordered={false}
                styles={stylesCard}
                actions={[
                    <Button block className='card-button' type="primary">Read more this text?</Button>
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