// Object
export const clone = (original) => Object.assign({}, original)
export const cloneDeep = (original) => JSON.parse(JSON.stringify(original))

/**
 * Removes path from an object recursively.
 * A full path to the key is not required.
 * The original object is not modified.
 *
 * Example:
 *   const original = { a: { b: { c: 'value' } }, c: 'value'  }
 *
 *   omitPathRecursively(original, 'a') // outputs: { c: 'value' }
 *   omitPathRecursively(original, 'c') // outputs: { a: { b: {} } }
 *   omitPathRecursively(original, 'b.c') // { a: { b: {} }, c: 'value' }
 */
export const omitPathRecursively = (
  original: object,
  path: string,
  depth: number = 1
) => {
  const segments = path.split('.')
  const final = depth === segments.length

  return JSON.parse(
    JSON.stringify(original, (key, value) => {
      const match = key === segments[depth - 1]

      if (!match) return value
      if (!final) return omitPathRecursively(value, path, depth + 1)
      return undefined
    })
  )
}
