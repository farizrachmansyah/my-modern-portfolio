import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { faGithub, faLinkedinIn, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(faUpRightFromSquare, faFolderOpen, faGithub, faLinkedinIn, faInstagram, faSpotify)

// eslint-disable-next-line eol-last, vue/component-definition-name-casing
Vue.component('font-awesome-icon', FontAwesomeIcon)