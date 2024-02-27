import React, { useState, useEffect } from 'react';
import { ListingPage } from './ListingPage';
import { Post } from '../../types';
import { getPosts } from '../../api/getPosts';

export const ListingPageContainer = () => {
    useEffect(() => {
        async function fetchData() {
            const postData = await getPosts();
            setPosts(postData)
        }
        fetchData();
    }, [])

    const [posts, setPosts] = useState<Post[]>([]);

    return <ListingPage posts={posts} />;
};