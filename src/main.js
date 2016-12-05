import Vue from 'vue'

import VueRouter from 'vue-router'

import App from './App'

import ConfigRouter from './config.router'

import ConfigUi from './config.ui'

import $ from 'jquery'

import bootJs from 'bootstrap/dist/js/bootstrap.min'

import swiper from './assets/js/swiper.min'

Vue.use(VueRouter);

Vue.use(ConfigUi);

let router = new VueRouter();

ConfigRouter(router)

router.start(App, "#apps")