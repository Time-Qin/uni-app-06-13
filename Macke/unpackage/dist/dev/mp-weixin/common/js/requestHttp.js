"use strict";
var common_vendor = require("../vendor.js");
const BaseUrl = "https://interface.mcake.com";
function GetRequest(url, data) {
  return new Promise((resolve, reject) => {
    url = BaseUrl + url;
    common_vendor.index.request({
      url,
      method: "GET",
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
