import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: {
                    base: '#4CA5F7',
                    lighten2: '#E5F3FF',
                    lighten3: '#ACD5FB'

                },
                white: {
                    base: '#ffffff'
                }
            }
        }
    }
})
