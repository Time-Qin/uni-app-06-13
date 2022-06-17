import {
	createStore
} from 'vuex';
export default createStore({
	state: {
		carts: uni.getStorageSync('carts') || [],
		history: uni.getStorageSync('history') || [],
	},
	mutations: {
		addCarts(state, payload) {
			let find = state.carts.find(item => item.id === payload.id);
			if (find) {
				find.buynum += payload.buynum;
			} else {
				state.carts.push(payload);
			}
			uni.setStorageSync('carts', state.carts);
			console.log(state.carts)
		},
		addHistory(state, payload) {
			state.history.push(payload.history);
			uni.setStorageSync('history', state.history);
		},
		clearHistry(state){
			state.history=[];
			uni.setStorageSync('history', state.history);
		}
	},
	getters: {}
});
