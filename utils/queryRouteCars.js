/**
 * pass query to the route and search
 * @param store
 * @param query
 * @param page
 * @returns {Promise<void>}
 */
export const queryRouteCars = async (store, query, page) => {
  const title = 'Catálogo de Autos'
  const {
    brands,
    benefits,
    priceRanges,
    fuel,
    transmission,
    carClassesDerco,
    models,
    order
  } = query

  await addData(store, 'brands', brands)
  await addData(store, 'benefits', benefits)
  await addData(store, 'priceRanges', priceRanges)
  await addData(store, 'fuel', fuel)
  await addData(store, 'carClassesDerco', carClassesDerco)
  await addData(store, 'models', models)
  await addData(store, 'transmission', transmission)
  await store.dispatch('cars/addBodySearchData', {
    key: 'order',
    value: order || 'asc'
  })
  await store.dispatch('cars/search', {
    type: 'cars',
    params: { page: query.page || page }
  })
  return { title }
}

/**
 * minify actions
 * @param store
 * @param key
 * @param value
 * @returns {Promise<void>}
 */
const addData = async (store, key, value) => {
  if (value) {
    await store.dispatch('cars/addBodySearchData', {
      key,
      value: value.includes(',') ? value.split(',') : [value]
    })
  } else {
    await store.dispatch('cars/addBodySearchData', {
      key,
      value: []
    })
  }
}
