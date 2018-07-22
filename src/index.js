/**
 * 功能：工程初始化
 * 作者：安超
 * 日期：2018/7/20
 */

import Vue from 'vue'
import ElmentUI from 'element-ui'
import projectInit from 'framework/projectInit'
import 'element-ui/lib/theme-chalk/index.css'
import './css/index.scss'

Vue.use(ElmentUI)

projectInit(document.getElementById('container'))
