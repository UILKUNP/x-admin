import init_css from './init_css'
import init_module from './init_module'
import init_core from './init_core'
import router from '../router'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import Directives from '../lib/Directives'
import Tools from "../lib/Tools"
import apis from "../lib/apis"
init_css();//初始化css
init_module(ElementUI, VueRouter, Directives, Tools, apis);//使用模块
init_core({router})//初始化vue核心