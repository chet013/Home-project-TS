import React, { useState, useEffect } from 'react';
import { ListingPage } from './ListingPage';
import { Post } from '../../types';
import { getPosts } from '../../api/getPosts';


export const ListingPageContainer = () => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true);
        async function fetchData() {
            const postData = await getPosts();
            setPosts(postData)
            setLoading(false);
        }
        try {
            setTimeout(() =>
                fetchData(), 1000 /* проверка работы спинера */
            );

        } catch (err) {
            setError(true)
            setLoading(false);
        }
    }, [])


    return <ListingPage
        posts={posts}
        loading={loading}
        error={error}

    />;
};