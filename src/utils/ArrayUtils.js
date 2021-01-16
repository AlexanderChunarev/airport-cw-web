export function selectDistinct(array, key) {
    return [...new Set(array.map(o => o[key]))]
        .map(value => array.find(o => o[key] === value))
}