export async function fetchJSON(url:string,comp: string) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to fetch ${comp}`);
    }

    return await response.json();
}
