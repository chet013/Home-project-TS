import React, { useState, useEffect } from 'react';
import { ListingPage } from './ListingPage';
import { Post, Autors } from '../../types';
import { getPosts } from '../../api/getPosts';
import { getAutors } from '../../api/getAutors';

const prepearPosts = (postsArr: Post[], authorsArr: Autors[]) => {
    return postsArr.map(post => {
        return {
            id: post.id,
            userId: post.userId,
            title: post.title,
            autorName: authorsArr.find((autor: Autors) => autor.id === post.userId)?.name
        }
    })
}

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
            const autorNames = await getAutors();
            setPosts(prepearPosts(postData, autorNames))
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