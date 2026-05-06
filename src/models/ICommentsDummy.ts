export interface ResponseCommentsDummy {
    comments:ICommentsDummy[],
    total:number,
    skip:number,
    limit:number
}

export interface ICommentsDummy {
    id: number
    body: string
    postId: number
    likes: number
    user: User
}

interface User {
    id: number
    username: string
    fullName: string
}
