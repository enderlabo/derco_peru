/* eslint-disable camelcase */
export default {
  data() {
    return {
      valor: false,
      errors: [],
      document_message: ''
    }
  },
  methods: {
    validateCompleteName(val, label) {
      const fullName = val.split(' ').filter(Boolean)
      if (fullName.length > 1) {
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validateCompleteName', val, 'remove')
        return true
      }
      document.getElementById(label).style.display = 'block'
      this.handleErrorsArray('validateCompleteName', val, 'push')
      return false
    },
    validateTerms(val, label) {
      if (val) {
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validateTerms', val, 'remove')
      } else {
        document.getElementById(label).style.display = 'block'
        this.handleErrorsArray('validateTerms', val, 'push')
      }
    },
    validateLandline(val, label) {
      const lengthValue = val.length
      if (lengthValue === 9) {
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validateLandline', val, 'remove')
      } else {
        document.getElementById(label).style.display = 'block'
        this.handleErrorsArray('validateLandline', val, 'push')
      }
    },
    validatePhone(val, label) {
      const lengthValue = val.length
      if (lengthValue === 9) {
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validatePhone', val, 'remove')
      } else {
        document.getElementById(label).style.display = 'block'
        this.handleErrorsArray('validatePhone', val, 'push')
      }
    },
    validateRequire(val, label) {
      const lengthValue = val.length
      if (lengthValue >= 1) {
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validateRequire', val, 'remove')
      } else {
        document.getElementById(label).style.display = 'block'
        this.handleErrorsArray('validateRequire', val, 'push')
      }
    },
    validateEmail(val, label) {
      'use strict'
      const pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      )
      if (pattern.test(val)) {
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validateEmail', val, 'remove')
      } else {
        document.getElementById(label).style.display = 'block'
        this.handleErrorsArray('validateEmail', val, 'push')
      }
      return pattern.test(val)
    },
    validateSubsidiary(val, label) {
      if (val.length === 0) {
        document.getElementById(label).style.display = 'block'
        this.handleErrorsArray('validateSubsidiary', val, 'push')
      } else {
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validateSubsidiary', val, 'remove')
      }
    },
    validateDocumentType(data, label, document_id) {
      if (data.length >= 1) {
        this.isValidDocumentId(document_id, 'document-error', data)
        document.getElementById(label).style.display = 'none'
        this.handleErrorsArray('validateDocumentType', data, 'remove')
      } else {
        document.getElementById(label).style.display = 'block'
        this.handleErrorsArray('validateDocumentType', data, 'push')
      }
    },
    isValidDocumentId(data, label, document_type) {
      if (document_type === 'ruc') {
        if (this.validateRuc(data)) {
          document.getElementById(label).style.display = 'none'
          this.handleErrorsArray('isValidDocumentId', data, 'remove')
        } else {
          this.document_message =
            'El número de documento debe tener 11 caracteres'
          document.getElementById(label).style.display = 'block'
          this.handleErrorsArray('isValidDocumentId', data, 'push')
        }

        return this.validateRuc(data)
      } else if (document_type === 'dni') {
        if (data.length === 8) {
          document.getElementById(label).style.display = 'none'
          this.handleErrorsArray('validateRuc', data, 'remove')
        } else {
          this.document_message =
            'El número de documento debe tener 8 caracteres'
          document.getElementById(label).style.display = 'block'
          this.handleErrorsArray('validateRuc', data, 'push')
        }
      } else if (document_type === 'passport' || document_type === 'carnet') {
        if (data.length === 12) {
          document.getElementById(label).style.display = 'none'
          this.handleErrorsArray('validateRuc', data, 'remove')
        } else {
          this.document_message =
            'El número de documento debe tener 12 caracteres'
          document.getElementById(label).style.display = 'block'
          this.handleErrorsArray('validateRuc', data, 'push')
        }
      } else {
        document.getElementById(label).style.display = 'block'
        this.document_message = 'Debe seleccionar un tipo de documento'
        this.handleErrorsArray('validateRuc', data, 'remove')
      }
    },
    validateRuc(data) {
      // Elimina cualquier caracter espacio o signos habituales y comprueba validez
      let ruc = data.replace(/[-.,[\]()\s]+/g, '')
      // Devuelve un booleano si es un RUC válido
      // (deben ser 11 dígitos sin otro caracter en el medio)
      // 11 dígitos y empieza en 10,15,16,17 o 20
      if (
        !(
          (ruc >= 1e10 && ruc < 11e9) ||
          (ruc >= 15e9 && ruc < 18e9) ||
          (ruc >= 2e10 && ruc < 21e9)
        )
      ) {
        this.document_message = 'No es un RUC válido'
        return false
      }
      // eslint-disable-next-line no-var
      for (var suma = -(ruc % 10 < 2), i = 0; i < 11; i++, ruc = (ruc / 10) | 0)
        suma += (ruc % 10) * ((i % 7) + ((i / 7) | 0) + 1)
      return suma % 11 === 0
    },
    handleErrorsArray(name, value, action) {
      const foundError = this.errors.find((e, index) => {
        if (e.name === name) {
          return index + 1
        } else return false
      })
      if (action === 'push') {
        if (!foundError) {
          this.errors.push({ name, value })
        }
      } else if (foundError) {
        this.errors.splice(this.errors.indexOf(foundError - 1, 1))
      }
    }
  }
}
