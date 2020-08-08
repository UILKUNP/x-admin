import init_css from './init_css'
import init_other from './init_other'
import init_core from './init_core'
import VueRouter from 'vue-router'
import router from '../router'
import ElementUI from 'element-ui';
import Directives from '../lib/Directives'
import Http from '../lib/Http'
init_css();
init_other(ElementUI, VueRouter, Directives, Http);
init_core({router})