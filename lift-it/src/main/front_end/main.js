import Vue from 'vue/dist/vue.js'
import test from './liftit-header.vue'

Vue.component('liftit-header',test);

new Vue({
	el : '#app',
	data :{
		message : 'this is lift it'
	}
});