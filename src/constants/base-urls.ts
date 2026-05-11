export const dummyBaseUrl = "https://dummyjson.com"
import type {IResponseOfUser} from "../models/IResponseOfUsers.ts";

export const dummyUsers = async (page: string): Promise<IResponseOfUser> => {
const limit=30;
const skip=limit*(+page)-limit;

    const resp = await fetch(dummyBaseUrl + "/users" + "?skip="+skip)
        .then(value => value.json())

    return resp
}