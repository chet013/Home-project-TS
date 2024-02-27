export const getPosts = () => {
    const result = fetch('https://jsonplaceholder.typicode.com/posts/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })

    return result;
}