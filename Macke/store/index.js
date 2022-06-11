import {createStore} from 'vuex';
export default createStore({
		state:{
			datas:[]
		},
		mutations:{
			// addCarts(state,payload){
			// 	let find = state.carts.find(item=>item.id===payload.id);
			// 	if(find){
			// 		find.buynum+=1;
			// 	}else{
			// 		state.carts.push(payload);
			// 	}
			// 	uni.setStorageSync('carts',state.carts);
			// }
		},
		getters:{
			
		}
});