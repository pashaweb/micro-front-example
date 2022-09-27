import { UsersList } from "../types/types";

export async function getUsersList(url: string): Promise<UsersList> {
    if (url === undefined) return [];
    const response = await fetch(url);
    return await response.json();
}


