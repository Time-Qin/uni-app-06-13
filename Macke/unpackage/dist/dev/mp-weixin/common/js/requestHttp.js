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
      header: {
        "token": "425be1495b7ea54fc4c8622be19413a1"
      },
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
function PostRequest(url, data) {
  return new Promise((resolve, reject) => {
    url = BaseUrl + url;
    common_vendor.index.request({
      url,
      header: {
        "Content-Type": "application/json",
        "token": "425be1495b7ea54fc4c8622be19413a1"
      },
      method: "POST",
      data,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      },
      complete: () => {
      }
    });
  });
}
exports.GetRequest = GetRequest;
exports.PostRequest = PostRequest;
