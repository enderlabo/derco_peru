const clearUrl = url => {
  if (url[url.length - 1] === '/') {
    url = url.slice(0, -1)
  }
  return url
}

export default async ({ store, route, redirect }) => {
  try {
    await store.dispatch('resources/getGlobals')
    const { redirects } = store.getters['resources/globals']
    if (redirects) {
      const rd = redirects.find(r => clearUrl(r.from) === clearUrl(route.path))
      if (rd) {
        console.log(`redirect: ${rd.from} => ${rd.to}`)
        return redirect(rd.to)
      }
    }
  } catch (e) {
    console.log('error', e)
  }
}
