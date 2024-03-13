import { PostPage } from './PostPage'
import { useNavigate } from 'react-router-dom';

export const PostPageContainer = () => {
    const navigate = useNavigate();

    const goToList = () => {
        navigate('/', { replace: false })
    }

    return <PostPage onClick={goToList} />
}