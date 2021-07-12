// vuejs with crypto-js - AES256 encrypt | decrypt api login

import CryptoJS from 'crypto-js'
const key = process.env.CAPTCHA_SITE_KEY || '82f2ceed4c503896c8a291e560bd43253' // change to your key
const iv = 'ascddsasisinaaa' // change to your iv

export default {
  methods: {
    Encrypt(txt) {
      const cipher = CryptoJS.AES.encrypt(txt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC
      })

      return cipher.toString()
    },
    Dencrypt(txt) {
      const cipher = CryptoJS.AES.decrypt(txt, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: CryptoJS.mode.CBC
      })

      return CryptoJS.enc.Utf8.stringify(cipher).toString()
    }
  }
}
