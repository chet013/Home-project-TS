import React from 'react';
import './style.css';
import { Typography, Button, Flex } from 'antd'

const { Text, Title } = Typography

export const PostPage = () => {
    return (
        <div className='post'>
            <div className='post-wrapper'>
                <Title italic type='secondary' >User Name`s text</Title>
                <Text strong className='post-text'>
                    Some text Some text Some text Some text Some text Some text
                    Some text Some text Some text Some text Some text Some text
                    Some text Some text Some text Some text Some text Some text
                    Some text Some text Some text Some text Some text Some text
                    Some text Some text Some text Some text Some text Some text
                </Text>
            </div>

            <Flex gap='small' className='buttonsGroupe'>
                <Button type='dashed'>Return to posts</Button>
                <Button type='primary'>Add comment</Button>
            </Flex>
        </div >
    )

}