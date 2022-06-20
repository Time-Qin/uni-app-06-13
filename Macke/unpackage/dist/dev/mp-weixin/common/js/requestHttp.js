"use strict";
var common_vendor = require("../vendor.js");
const BaseUrl = "https://interface.mcake.com";
let count = 0;
function GetRequest(url, data) {
  count++;
  return new Promise((resolve, reject) => {
    url = BaseUrl + url;
    if (count === 1) {
      common_vendor.index.showLoading({
        title: "\u52A0\u8F7D\u4E2D"
      });
    }
    common_vendor.index.request({
      url,
      method: "GET",
      data,
      header: {
        "token": "425be1495b7ea54fc4c8622be19413a1"
      },
      success: (res) => {
        count--;
        if (count === 0) {
          common_vendor.index.hideLoading();
        }
        resolve(res.data);
      },
      fail: (err) => {
        count--;
        if (count === 0) {
          common_vendor.index.hideLoading();
        }
        reject(err);
      },
      complete: () => {
        common_vendor.index.hideLoading();
      }
    });
  });
}
function PostRequest(url, data) {
  count++;
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
        count--;
        if (count === 0) {
          common_vendor.index.hideLoading();
        }
        resolve(res.data);
      },
      fail: (err) => {
        count--;
        if (count === 0) {
          common_vendor.index.hideLoading();
        }
        reject(err);
      },
      complete: () => {
      }
    });
  });
}
function GetRequestToken(url, data) {
  return new Promise((resolve, reject) => {
    url = BaseUrl + url;
    common_vendor.index.request({
      url,
      method: "GET",
      data,
      header: {
        "Content-Type": "application/json",
        "token": "425be1495b7ea54fc4c8622be19413a1"
      },
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
exports.GetRequestToken = GetRequestToken;
exports.PostRequest = PostRequest;
