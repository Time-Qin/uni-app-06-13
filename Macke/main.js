// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue';
import App from './App.vue';
import uView from './uni_modules/vk-uview-ui';
import store from './store/index';
export function createApp() {
	const app = createSSRApp(App);
	app.use(store);
	app.use(uView);
	app.config.globalProperties.$filters = {
		formatDate: function() {
			const date = new Date()
			const month = date.getMonth() + 1;
			const day = date.getDate()+1;
			return date.getFullYear() +'-' + month.toString().padStart(2, '0') + '-' + day.toString().padStart(2,
				'0')
		}
	}

	return {
		app
	}
}
// #endif

