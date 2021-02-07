
export function call(func, params) {
    const queryString = Object.entries(params).map(([key, value]) => {
        return `${key}=${JSON.stringify(value)}`;
    }).join('&');

    return fetch(`/api/${func}?${queryString}`, { method: "POST" })
}
