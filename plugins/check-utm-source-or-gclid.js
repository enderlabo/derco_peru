export default function ({ query, route }) {
  const fullUrl = process.env.baseUrl + route.fullPath
  const querySource = query.utm_source || query.gclid || query.fbclid || null

  if (querySource) {
    sessionStorage.setItem('querySource', fullUrl)
  }
}
