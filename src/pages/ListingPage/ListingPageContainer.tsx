import React, { useState, useEffect } from 'react';
import { ListingPage } from './ListingPage';
import { Post } from '../../types';
import { getData } from '../../api/api'


const postsData: Post[] = [

    {
        id: 1,
        title: 'hi, i am Slava',
        autorName: 'Slava',
    },
    {
        id: 2,
        title: 'hi, i am Ivan',
        autorName: 'Ivan',
    },
    {
        id: 3,
        title: 'hi, i am Gosha',
        autorName: 'Gosha',
    },

]

export const ListingPageContainer = () => {
    useEffect(() => {
        try {
            getData()
        } catch { }

    },
        [])

    const [posts, setPosts] = useState<Post[]>(postsData);

    return <ListingPage posts={posts} />;
};
