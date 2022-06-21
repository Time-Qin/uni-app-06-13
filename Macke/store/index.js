import {
	createStore
} from 'vuex';
export default createStore({
	state: {
		carts: uni.getStorageSync('carts') || [],
		history: uni.getStorageSync('history') || [],
		goodsDatas: {},
		user: {},
		address: '',
	},
	mutations: {
		addCarts(state, payload) {
			let find = state.carts.find(item => item.id === payload.id);
			if (find && find.price === payload.price) {
				find.buynum += payload.buynum;
			} else {
				state.carts.push(payload);
			}
			uni.setStorageSync('carts', state.carts);
			console.log(state.carts)
		},
		updateCart(state, payload) {
			state.address = payload
			console.log(payload);
		},
		addHistory(state, payload) {
			let find = state.history.find(item => item === payload.history);
			if (!find ) {
				state.history.push(payload.history);
				uni.setStorageSync('history', state.history);
			} else {
				return
			}

		},
		clearHistry(state) {
			state.history = [];
			uni.setStorageSync('history', state.history);
		},
		addUser(state, payload) {
			state.user = payload;
			uni.setStorageSync('user', state.user)
			console.log(state.user)
		}
	},
	getters: {}
});
