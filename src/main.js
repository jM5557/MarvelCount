import Vue from 'vue'

import NavigationBar from './components/NavigationBar.vue';

import App from './App.vue';
import Comparison from './components/Comparison.vue';
import Evolution from './components/Evolution.vue';

import Footer from './components/Footer';

import { renderComponentIfElementExists } from './lib/helpers.js';
import './scss/style.scss';


new Vue({
	el: '#nav',
	components: {
		NavigationBar
	},
	template: '<NavigationBar></NavigationBar>'
});

renderComponentIfElementExists ('app-home', App);
renderComponentIfElementExists ('app-comparison', Comparison);
renderComponentIfElementExists ('app-evolution', Evolution);

new Vue({
	el: '#footer',
	components: {
		Footer
	},
	template: '<Footer></Footer>'
})