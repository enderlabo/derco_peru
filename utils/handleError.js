import consola from 'consola'
export const handleError = (error, commit) => {
  let errMsg = ''
  errMsg = error.response
    ? error.response.data
    : 'SERVER_TIMEOUT_CONNECTION_ERROR'
  consola.error('* debug *', errMsg)
}
