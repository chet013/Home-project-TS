export const getAutors = () => {
    const result = fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (response.status === 404) {
                throw new Error('404');
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw new Error(error)
        })

    return result;
}