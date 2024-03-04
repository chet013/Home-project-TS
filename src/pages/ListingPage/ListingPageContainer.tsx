import React, { useState, useEffect } from 'react';
import { ListingPage } from './ListingPage';
import { Post } from '../../types';
import { getPosts } from '../../api/getPosts';

export const ListingPageContainer = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            setLoading(true);
            const postData = await getPosts();
            setPosts(postData)
            setLoading(false);
        } catch (error) {
            setError(true)
            setLoading(false);
        }
    }

    return <ListingPage
        posts={posts}
        loading={loading}
        error={error}
        onClick={fetchData}
    />;
};