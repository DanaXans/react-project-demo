import type {CommentModule} from "../module/CommentModule.ts";
const dataComments = import.meta.env.VITE_API_BASE_URL + "/comments";

export const loadComments = async () => {
    const response: CommentModule[] = await fetch(dataComments)
        .then(res => res.json())
    return response;
}