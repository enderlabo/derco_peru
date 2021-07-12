export default {
  methods: {
    uniqBy(arr, predicate) {
      const cb = typeof predicate === 'function' ? predicate : o => o[predicate]

      return [
        ...arr
          .reduce((map, item) => {
            const key = item === null || item === undefined ? item : cb(item)

            // eslint-disable-next-line chai-friendly/no-unused-expressions
            map.has(key) || map.set(key, item)

            return map
          }, new Map())
          .values()
      ]
    }
  }
}
