import { extend } from 'vee-validate'
import {
  required,
  digits,
  email,
  alpha_dash as alphaDash,
  length
} from 'vee-validate/dist/rules'

extend('lengthVin', {
  ...length,
  message: 'El número de vin debe tener 17 caracteres'
})
extend('alphaDash', {
  ...alphaDash,
  message: 'Ingresar solo números y letras'
})

extend('requiredName', { ...required, message: 'Indica tu nombre' })

extend('requiredNameAndLastName', {
  ...required,
  message: 'Indica tu nombre y apellido'
})

extend('requiredDercoTerm', {
  ...required,
  message: 'Debe autorizar o no a Derco'
})

extend('validateNameAndLastName', {
  validate: value => {
    const fullName = value.split(' ').filter(Boolean)
    return fullName.length > 1
  },
  message: 'Ingresa tu apellido'
})

extend('requiredLastName', { ...required, message: 'Indica tu apellido' })

extend('requiredDocument', {
  ...required,
  message: 'Debe seleccionar un tipo de documento'
})

extend('requiredDepartment', {
  ...required,
  message: 'Debe seleccionar un Departamento'
})

extend('requiredConcessionaire', {
  ...required,
  message: 'Debe seleccionar un Concesionario'
})

extend('requiredTerms1', {
  ...required,
  message: 'Debe leer la cláusula informativa y aceptar.'
})

extend('validateTerms1', {
  validate: value => {
    return !(value === false || !value)
  },
  message: 'Debe leer la cláusula informativa y aceptar.'
})

extend('validateRuc', {
  validate: value => {
    let ruc = value.replace(/[-.,[\]()\s]+/g, '')
    if (
      !(
        (ruc >= 1e10 && ruc < 11e9) ||
        (ruc >= 15e9 && ruc < 18e9) ||
        (ruc >= 2e10 && ruc < 21e9)
      )
    ) {
      return false
    }
    let suma
    let i
    for (suma = -(ruc % 10 < 2), i = 0; i < 11; i++, ruc = (ruc / 10) | 0)
      suma += (ruc % 10) * ((i % 7) + ((i / 7) | 0) + 1)
    if (suma % 11 === 0) {
      return suma % 11 === 0
    }
  },
  message: 'El número de documento debe tener 11 caracteres'
})

extend('required', {
  ...required,
  message: 'Debes rellenar este campo correctamente'
})

extend('digitsDocument', {
  ...digits,
  message: 'El número de documento debe tener {length} caracteres'
})
extend('digitsDni', {
  ...digits,
  message: 'El número de documento debe tener {length} caracteres'
})

extend('digitsPhone', {
  ...digits,
  message: 'Por favor indica un número de celular válido'
})

extend('email', { ...email, message: 'Indica un email válido' })
