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
	return new Promise((resovle, reject) => {
		//#ifdef MP-WEIXIN
		url = BaseUrl + url;
		//#endif
		uni.request({
			url: url,
			header: {
				'Content-Type': 'application/json'
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