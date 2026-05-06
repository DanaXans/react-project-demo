import type {IUsersJson} from "../models/IUsersJson.ts";
import {commentsDummy, commentsJson, postsDummy, postsJson, usersDummy, usersJson} from "../constants/urls.ts";
import type {UsersResp} from "../models/IUserDummy.ts";
import type {IPostJson} from "../models/IPostJson.ts";
import type {ResponsePost} from "../models/IPostDummy.ts";
import type {ResponseCommentsDummy} from "../models/ICommentsDummy.ts";
import type {ICommentsJson} from "../models/ICommentsJson.ts";

export const userJsonService = {
    getUsersJson: async (): Promise<IUsersJson[]> => {
        return await fetch(usersJson.allUsersJson)
            .then(value => value.json())
    }
}

export const userDummyData = {
    getDummyUsers: async (): Promise<UsersResp> => {
        return await fetch(usersDummy.allUsersDummy)
            .then(value => value.json())
    }
}

export const postJsonService = {
    getPostJson: async (): Promise<IPostJson[]> => {
        return await fetch(postsJson.allPostsJson)
            .then(value => value.json())
    }
}

export const postDummyData = {
    getPostDummy: async (): Promise<ResponsePost> => {
        return await fetch(postsDummy.allPostsDummy)
            .then(value => value.json())
    }
}

export const commentsDummyData = {
    getCommentsDummy: async (): Promise<ResponseCommentsDummy> => {
        return await fetch(commentsDummy.allCommentsDummy)
            .then(value => value.json())
    }
}

export const commentsJsonService = {
    getCommentsJson: async (): Promise<ICommentsJson[]> => {
        return await fetch(commentsJson.allCommentsJson)
            .then(value => value.json())
    }
}