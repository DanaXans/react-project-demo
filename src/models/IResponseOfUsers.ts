import type {IUser} from "./dummy-user/IUser.ts";

export interface IResponseOfUser {
    users: IUser[],
    total: number,
    skip: number,
    limit: number,
}