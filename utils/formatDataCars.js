export const formatDataCars = async (httpClient, dataSearch) => {
  const arrayCars = []
  await dataSearch.map(item => {
    arrayCars.push({ sap: item.code, year: item.prices[0] })
    return item
  })
  const response = await httpClient.$post(
    process.env.API_STORE_URL.replace(/\$/, '') +
      `/api/store/cars/reservationlink`,
    arrayCars
  )
  return dataSearch.map(item => {
    item.dataLink = response.find(i => i.sap === item.code).prices
    return item
  })
}
