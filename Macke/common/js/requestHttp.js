const BaseUrl = "https://interface.mcake.com";
export function GetRequest(url, data) {
	return new Promise((resolve, reject) => {
		//#ifdef MP-WEIXIN
		url = BaseUrl + url;
		//#endif
		uni.showLoading({
			title: '加载中'
		});
		uni.request({
			url: url,
			method: 'GET',
			data: data,
			header: {
				'token':'425be1495b7ea54fc4c8622be19413a1',
			},
			success: res => {
				uni.hideLoading()
				resolve(res.data);
			},
			fail: (err) => {
				uni.hideLoading()
				reject(err);
			},
			complete: () => {
				uni.hideLoading()
			}
		});
	})
}

export function PostRequest(url, data) {
	return new Promise((resolve, reject) => {
		//#ifdef MP-WEIXIN
		url = BaseUrl + url;
		//#endif
		uni.request({
			url: url,
			header: {
				'Content-Type': 'application/json',
				'token':'425be1495b7ea54fc4c8622be19413a1',
			},
			method: 'POST',
			data: data,
			success: res => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			},
			complete: () => {}
		});
	})
}

export function GetRequestToken(url,data){
	return new Promise((resolve,reject)=>{
		//#ifdef MP-WEIXIN
		url = BaseUrl+url;
		//#endif
		uni.request({
			url: url,
			method: 'GET',
			data: data,
			header: {
				'Content-Type': 'application/json',
				'token':'425be1495b7ea54fc4c8622be19413a1'
			},
			success: res => {
				resolve(res.data);
			},
			fail: (err) => {
				reject(err);
			},
			complete: () => {}
		});
	})
}
