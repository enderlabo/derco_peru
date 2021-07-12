import { format, parseISO } from 'date-fns'
import { es } from 'date-fns/locale'

export const formatDate = (date, formatStr) => {
  return format(parseISO(date), formatStr, {
    locale: es
  })
}
