const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiRequest = async <T>(endpoint: string): Promise<T> => {
    const res = await fetch(`${BASE_URL}/${endpoint}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch ${endpoint}`);
    }

    return res.json();
};