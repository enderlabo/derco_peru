import Vue from 'vue'
import VueFacebookPixel from 'vue-analytics-facebook-pixel'

Vue.use(VueFacebookPixel)

/**
 * Init facebook tracking pixel
 * @param  {String} appId
 * @param  {object} [data={}]
 */
Vue.analytics.fbq.init('2590902491201248', {
  em: 'user@mail.com'
})
