export type Post = {
    id: number,
    userId: number,
    autorName: string | undefined,
    title: string,
}

export type postText = {
    id: number,
    userId: number,
    autorName: string | undefined,
    body: string,
}

export type Autors = {
    id: number,
    name: string,
}