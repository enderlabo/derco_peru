import Vue from 'vue'
import currency from 'currency.js'

export const slugify = function (value) {
  value = value.replace(/^\s+|\s+$/g, '') // trim
  value = value.toLowerCase()

  // remove accents, swap ñ for n, etc
  const from = 'ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;'
  const to = 'aaaaaeeeeeiiiiooooouuuunc------'
  for (let i = 0, l = from.length; i < l; i++) {
    value = value.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  value = value
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return value
}

const stripTags = value => {
  return value.replace(/<.+?>/g, '')
}

export const capitalize = value => {
  return value.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase()
  })
}
export const replaceLineBreak = value => {
  if (value) {
    value = value.replace(/\r\n/g, ' <br> ')
    value = value.replace(/\\'\\'/g, '"')
    value = value.replace(/\\/g, '')
    return value
  } else {
    return ''
  }
}

Vue.filter('slugify', slugify)
Vue.filter('stripTags', stripTags)

Vue.filter('capitalize', capitalize)

Vue.filter('replaceLineBreak', replaceLineBreak)

const USD = value =>
  currency(value, {
    symbol: 'US$ ',
    precision: 0,
    formatWithSymbol: true
  }).format()
const PE = value =>
  currency(value, {
    symbol: 'S/ ',
    precision: 0,
    formatWithSymbol: true
  }).format()

Vue.filter('USD', USD)
Vue.filter('PE', PE)
