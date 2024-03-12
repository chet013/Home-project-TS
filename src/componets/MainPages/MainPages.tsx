import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ListingPageContainer } from '../../pages/ListingPage/ListingPageContainer'
import { PostPageContainer } from '../../pages/PostPage/PostPageContainer'

const router = createBrowserRouter([
    {
        path: '/',
        element: <ListingPageContainer />
    },
    {
        path: 'PostPage',
        element: <PostPageContainer />
    }
])

export const BuildPage = () => {

    return (
        <RouterProvider router={router} />
    )
};

