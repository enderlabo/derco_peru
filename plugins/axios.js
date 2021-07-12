export default function ({ $axios }) {
  $axios.onRequest(config => {
    config.headers.common['blog-url'] = process.env.SITE_TOKEN
  })
}
