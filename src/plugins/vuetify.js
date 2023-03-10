/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#4D6A79',
          success: '#BBF551',
          accent: '#FC5259',
          secondary: '#17AECA',
          attention:'#4ADEC8',
          info:'F3E12E'
      
        },
      },
    },
  },
})

