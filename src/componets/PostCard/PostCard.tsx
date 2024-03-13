import React from 'react';
import { Card, Button, Typography } from 'antd';
import './style.css';

type PostCardProps = {
    id: number,
    autorName: string | undefined,
    title: string,
    onClick: React.MouseEventHandler<HTMLElement>;
}

const { Text } = Typography

const stylesCard = {
    actions: { padding: '0 8px' }
}

export const PostCard = ({ id, autorName = 'Anonimus', title, onClick }: PostCardProps) => {
    return (
        <div className='card'>
            <Card
                title={id}
                id={id.toString()}
                extra={<Text italic type='secondary'>{autorName}</Text>}
                bordered={false}
                styles={stylesCard}
                actions={[
                    <Button
                        block
                        className='card-button'
                        type="primary"
                        onClick={onClick}
                        id={id.toString()}
                    >
                        <span id={id.toString()}>
                            Read more this text?
                        </span>
                    </Button>
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