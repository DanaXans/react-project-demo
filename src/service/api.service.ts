import type {PostModel} from "../models/PostModel.ts";
const dataPosts=import.meta.env.VITE_API_BASE_URL + '/posts';


export const loadPosts = async () => {
    const response:PostModel[]=await fetch(dataPosts)
        .then(res=>res.json())
    return response;
}