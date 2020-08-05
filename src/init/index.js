import init_css from './init_less'
import init_http from './init_http'
import init_other from './init_other'
import init_core from './init_core'
import router from '../router'
import ElementUI from 'element-ui';
init_css();
init_http();
init_other(ElementUI);
init_core(router)