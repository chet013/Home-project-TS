import React from 'react';
import './style.css';
import { Image, Typography, Button } from 'antd';

export const AppHeader = () => {
    return (
        <div className='headerStyle'>
            <Image
                width={50}
                src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                preview={false}
            />
            <Typography.Text
                style={{ color: '#fff', margin: '0' }}>
                Description project: Display comments and user data.
            </Typography.Text>
            <Button type="default">Login</Button>
        </div>
    );
};

