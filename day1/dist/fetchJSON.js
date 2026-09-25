export async function fetchJSON(url, comp) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch ${comp}`);
    }
    return await response.json();
}
//# sourceMappingURL=fetchJSON.js.map