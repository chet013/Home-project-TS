import React, { useState, useEffect } from 'react';
import { ListingPage } from './ListingPage';
import { Post, Autors } from '../../types';
import { getPosts } from '../../api/getPosts';
import { getAutors } from '../../api/getAutors';

export const ListingPageContainer = () => {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [autors, setAutors] = useState<Autors[]>([])
    const [error, setError] = useState(false)

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            setLoading(true);
            const postData = await getPosts();
            const autorNames = await getAutors();
            setPosts(postData)
            setAutors(autorNames)
            setLoading(false);
        } catch (error) {
            setError(true)
            setLoading(false);
        }
    }

    return <ListingPage
        posts={posts}
        autors={autors}
        loading={loading}
        error={error}
        onClick={fetchData}
    />;
};