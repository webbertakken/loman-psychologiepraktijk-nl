// Object
export const clone = (original) => Object.assign({}, original)
export const cloneDeep = (original) => JSON.parse(JSON.stringify(original))
