export function buildQueryString(data) {
    const segments = Object.keys(data)
        .filter(key => data[key] !== 0)
        .map(key => `${key}=${data[key]}`)
    return segments.join('&');

}