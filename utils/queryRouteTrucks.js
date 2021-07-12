/**
 * pass query to the route and search
 * @param store
 * @param query
 * @param page
 * @returns {Promise<void>}
 */
export const queryRouteTrucks = async (store, query, page) => {
  const { priceRanges, carClassesDerco, models, order, brands } = query

  await addData(store, 'brands', brands)
  await addData(store, 'benefits', null)
  await addData(store, 'priceRanges', priceRanges)
  await addData(store, 'fuel', null)
  await addData(store, 'carClassesDerco', carClassesDerco)
  await addData(store, 'models', models)
  await addData(store, 'transmission', null)
  await store.dispatch('cars/addBodySearchData', {
    key: 'order',
    value: order || 'asc'
  })
  await store.dispatch('cars/search', {
    type: 'trucks',
    params: { page: query.page || page }
  })
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
