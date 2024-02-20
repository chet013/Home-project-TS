import React from 'react';
import './style.css';
import { Image, Typography, Button } from 'antd';

export const Header = () => {
    return (
        <div className='header'>
            <div className='container'>
                <Image
                    className='logo'
                    width={50}
                    src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    preview={false}
                />
                <Typography.Text
                    className='text'>
                    Description project: Display comments and user data.
                </Typography.Text>
            </div>

            <Button type="default">Login</Button>
        </div>
    );
};

