import { useState, useEffect } from 'react'
import { postText, Autors } from '../../types';
import { PostPage } from './PostPage'
import { getPosts } from '../../api/getPosts';
import { getAutors } from '../../api/getAutors';

const prepearPosts = (postsArr: postText[], authorsArr: Autors[]) => {
    return postsArr.map(post => {
        return {
            id: post.id,
            userId: post.userId,
            autorName: authorsArr.find((autor: Autors) => autor.id === post.userId)?.name,
            body: post.body,
        }
    })
}

export const PostPageContainer = () => {
    const [posts, setPosts] = useState<postText[]>([]);
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true);

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

    return <PostPage
        loading={loading}
        posts={posts}
        error={error}
        onClick={fetchData}
    />
}