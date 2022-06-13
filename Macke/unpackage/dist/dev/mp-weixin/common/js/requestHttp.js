"use strict";
var common_vendor = require("../vendor.js");
const BaseUrl = "https://interface.mcake.com";
function GetRequest(url, data) {
  return new Promise((resolve, reject) => {
    url = BaseUrl + url;
    common_vendor.index.showLoading({
      title: "\u52A0\u8F7D\u4E2D"
    });
    common_vendor.index.request({
      url,
      method: "GET",
      data,
      success: (res) => {
        common_vendor.index.hideLoading();
        resolve(res.data);
      },
      fail: (err) => {
        common_vendor.index.hideLoading();
        reject(err);
      },
      complete: () => {
        common_vendor.index.hideLoading();
      }
    });
  });
}
exports.GetRequest = GetRequest;
